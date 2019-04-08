import boto3
from SQS_sqs_url_fifo import QUEUE_URL

sqs = boto3.client('sqs')

response = sqs.purge_queue(
    QueueUrl=QUEUE_URL
)