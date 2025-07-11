from django.core.serializers import serialize
from django.shortcuts import render
from django.template.context_processors import request
from rest_framework.exceptions import AuthenticationFailed, ParseError
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST, HTTP_201_CREATED
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate, login, logout
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from .serializers import ParentUserSerializer


class LoginView(APIView):

    @swagger_auto_schema(
        operation_summary="로그인",
        operation_description="username과 password를 받아 로그인합니다. 세션 기반 인증입니다.",
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            required=['username', 'password'],
            properties={
                'username': openapi.Schema(type=openapi.TYPE_STRING, description='사용자 이름'),
                'password': openapi.Schema(type=openapi.TYPE_STRING, description='비밀번호'),
            }
        ),
        responses={
            200: openapi.Response(description='로그인 성공'),
            400: openapi.Response(description='입력 오류'),
            401: openapi.Response(description='인증 실패'),
        }
    )
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        if not username or not password:
            raise ParseError({'error': 'Username and password are required'})

        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            return Response({'message': 'Logged in'}, status=HTTP_200_OK)
        else:
            raise AuthenticationFailed({'error': 'Invalid username or password'})


class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(
        operation_summary="로그아웃",
        operation_description="세션에서 사용자 로그아웃",
        responses={
            200: openapi.Response(description='로그아웃 성공'),
            403: openapi.Response(description='로그인 필요'),
        }
    )
    def post(self, request):
        logout(request)
        return Response({"message": "Logged out"}, status=HTTP_200_OK)


class UserCreateView(APIView):

    @swagger_auto_schema(
        operation_summary="회원가입",
        operation_description="새로운 사용자 등록. username, password, email 필요.",
        request_body=ParentUserSerializer,
        responses={
            201: ParentUserSerializer,
            400: openapi.Response(description='입력 오류'),
        }
    )
    def put(self, request):
        password = request.data.get('password')
        if not password:
            raise ParseError({'error': 'Password is required'})

        serializer = ParentUserSerializer(data=request.data)

        if not serializer.is_valid():
            return Response({
                'message': 'Invalid input',
                'errors': serializer.errors
            }, status=HTTP_400_BAD_REQUEST)

        user = serializer.save()
        return Response({
            'message': 'User registered successfully',
            'user': serializer.data
        }, status=HTTP_201_CREATED)

class UserDeleteView(APIView):
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(
        operation_summary="회원 탈퇴",
        operation_description="현재 로그인된 사용자의 계정을 삭제합니다.",
        responses={
            200: openapi.Response(description='계정 삭제 성공'),
            403: openapi.Response(description='로그인 필요'),
        }
    )
    def delete(self, request):
        user = request.user
        username = user.username
        user.delete()
        return Response({'message': f'User {username} deleted successfully.'}, status=HTTP_200_OK)