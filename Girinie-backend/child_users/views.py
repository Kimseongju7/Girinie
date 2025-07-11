from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from django.shortcuts import get_object_or_404
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

from .models import ChildUser
from .serializers import ChildUserSerializer


class ChildUserView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    @swagger_auto_schema(
        operation_summary="부모의 자녀 리스트 조회",
        operation_description="현재 로그인한 부모 계정과 연결된 모든 자녀를 조회합니다.",
        responses={200: ChildUserSerializer(many=True)}
    )
    def get(self, request):
        children = ChildUser.objects.filter(parent=request.user)
        serializer = ChildUserSerializer(children, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @swagger_auto_schema(
        operation_summary="자녀 추가",
        operation_description="새로운 자녀를 부모 계정에 연결하여 추가합니다.",
        request_body=ChildUserSerializer,
        responses={
            201: ChildUserSerializer,
            400: '입력 오류',
        }
    )
    def post(self, request):
        serializer = ChildUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(parent=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ChildUserDetailView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    @swagger_auto_schema(
        operation_summary="단일 자녀 조회",
        operation_description="자녀 ID를 통해 하나의 자녀 정보를 조회합니다 (부모 소유만 가능).",
        manual_parameters=[
            openapi.Parameter('pk', openapi.IN_PATH, description="자녀 ID", type=openapi.TYPE_INTEGER),
        ],
        responses={200: ChildUserSerializer}
    )
    def get(self, request, pk):
        child = get_object_or_404(ChildUser, pk=pk, parent=request.user)
        serializer = ChildUserSerializer(child)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @swagger_auto_schema(
        operation_summary="자녀 정보 수정",
        operation_description="자녀 ID에 해당하는 정보를 수정합니다. 부모만 수정할 수 있습니다.",
        request_body=ChildUserSerializer,
        responses={200: ChildUserSerializer, 400: '입력 오류'}
    )
    def put(self, request, pk):
        child = get_object_or_404(ChildUser, pk=pk, parent=request.user)
        serializer = ChildUserSerializer(child, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @swagger_auto_schema(
        operation_summary="자녀 삭제",
        operation_description="자녀 ID에 해당하는 자녀를 삭제합니다. 부모만 삭제 가능.",
        manual_parameters=[
            openapi.Parameter('pk', openapi.IN_PATH, description="자녀 ID", type=openapi.TYPE_INTEGER),
        ],
        responses={204: '삭제 성공', 404: '자녀 없음'}
    )
    def delete(self, request, pk):
        child = get_object_or_404(ChildUser, pk=pk, parent=request.user)
        child.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)