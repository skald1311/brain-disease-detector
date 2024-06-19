# Use the AWS Lambda Python base image
FROM public.ecr.aws/lambda/python:3.11

# Copy function code
COPY lambda_function.py best.pt ${LAMBDA_TASK_ROOT}

# Install the packages
RUN yum update -y && \
    yum install -y mesa-libGL mesa-libGLU && \
    yum clean all
    
RUN pip install ultralytics Pillow

# Set the CMD to your handler function
CMD ["lambda_function.lambda_handler"]