from django.contrib.auth.models import User
from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, style={'input_type': 'password'})
    class Meta:
        model = User
        fields = ["username", "email", "password"]

    def validate_password(self, value):
        try:
            validate_password(value)
        except ValidationError as exc:
            # turn Django validator errors into DRF errors
            raise serializers.ValidationError(exc.messages)
        return value

    def create(self, validated_data):
        # User.objects.create = saves passord in plain text
        # User.objects.create_user = saves password in hashed format
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user
