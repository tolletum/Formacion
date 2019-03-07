import json
import boto3

def lambda_handler(event, context):
    # Creamos cliente de dynamoDB
    dynamodb = boto3.resource("dynamodb")
    print('EVENT')
    print(event)
    data = json.loads(event['body'])
    
    table_birds = dynamodb.Table('birds')
    bird = table_birds.put_item(
        Item= {
            'serialId': data['id'],
            'sort': data['sort'],
            'birthdate': data['birthdate'],
            'color': data['color']
        }
    )
    return {
        'statusCode': 200,
        'body': bird
    }
