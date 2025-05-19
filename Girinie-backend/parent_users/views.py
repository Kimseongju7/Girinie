from django.core.serializers import serialize
from django.shortcuts import render
from django.template.context_processors import request
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.status import HTTP_200_OK,HTTP_400_BAD_REQUEST, HTTP_201_CREATED
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.exceptions import ParseError, AuthenticationFailed
from rest_framework.response import Response
from .serializers import ParentUserSerializer
from django.contrib.auth import authenticate, login, logout
from rest_framework.permissions import IsAuthenticated
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
class Login(APIView):

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        if not username or not password:
            raise ParseError({'error' : 'Username and password are required'})

        #Django 인증 시스템을 통해 사용자 인증을 시도
        user = authenticate(request, username = username, password=password)
        if user:
            #인증 성공 시 세션에 로그인 상태를 기록
            login(request, user)
            return Response({'message':'Logged in'}, status=HTTP_200_OK)
        else:
            raise AuthenticationFailed({'error':'Invalid username or password'})

class Logout(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):
        logout(request)
        return Response({"message" : "Logged out"}, status=HTTP_200_OK)

class ParentUsers(APIView):

    #새로운 user 추가
    def put(self, request):

        password = request.data.get('password')
        if not password:
            raise ParseError({'error':'Password is required'})
        serializer = ParentUserSerializer(data=request.data)

        #serializer is not valid
        if not serializer.is_valid():
            return Response({
                'message':'Invalid input',
                'errors':serializer.errors
                },
                status=HTTP_400_BAD_REQUEST, )

        #serializer is valid
        user = serializer.save()
        return Response({
            'message':'User registered successfully',
            'user':serializer.data
        },
            status=HTTP_201_CREATED,
        )
