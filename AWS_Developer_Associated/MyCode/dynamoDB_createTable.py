################################
# Creating a table with python #
################################

import boto3

dynamodb = boto3.client("dynamodb")
respuesta = dynamodb.create_table(
    AttributeDefinitions = [
        {
            'AttributeName': 'IdFiscal',
            'AttributeType': 'S'
        }
    ],
    TableName = "Clientes",
    KeySchema = [
        {
            'AttributeName': 'IdFiscal',
            'KeyType': 'HASH'
        },
    ],
    ProvisionedThroughput={
        'ReadCapacityUnits': 5,
        'WriteCapacityUnits': 5
    }
)
print(respuesta)
