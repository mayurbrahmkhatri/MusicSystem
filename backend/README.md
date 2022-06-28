# Omron Data Analysis System
Overview

## Table of Contents

* [Setup Development](#setup-development)
* [Build the projcet](#build-the-projcet)
* [Run Tests](#setup-development)
* [Run in local](#run-in-local)
* [Deployment](#deployment)
* [Attribution](#attribution)

## Setup Development
``` bash

# install app's dependencies
$ npm install
```

##### Setup AWS config variables

```
{
  userSettingsTable   = "${user_settings_table}"
  userProcessingTable = "${operation_details_table}"
  readingBucketName   = "${input_csv_bucket}"
  outputBucketName    = "${output_csv_bucket}"
  scriptBucketName    = "${code_bucket}"
  profileName            = "${script_ec2_instance_profile_name}"
  region              = "${region}"
  subnetId            = "${subnet_id}"
  securityGroupId     = "${security_group_id}"
  amiId               = "${lookup(aws_script_amis, region)}"
  keyName             = "${ec2_key_pair}"
  sseApplicationId  = "${sse_application_id}"
  sseApplicationApiUrl  = "${sse_api_endpoint}"
  systemSettingsTable = "${system_settings_table}"
  connectionTable = "${connection_settings_table}"
}
```
## Build the projcet

## Run Tests
``` bash
# run tests
npm test

#run eslint
npm eslint

```

## Run in local
``` bash

# To project in local
node index.js

```