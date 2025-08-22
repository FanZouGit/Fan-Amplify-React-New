const awsmobile = {
    "aws_project_region": "us-east-1",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_gd0dM94Cz",
    "aws_user_pools_web_client_id": "4j3imt3grnv8u5d2k2n31ovo6d",
    "authenticationFlowType": "USER_SRP_AUTH",
    "aws_cloud_logic_custom": [
        {
            "name": "PresignedURLHttpAPI",
            "endpoint": "https://if32vp9sxd.execute-api.us-east-1.amazonaws.com/generate-url",
            "region": "us-east-1"
        }
    ]
};
export default awsmobile;
