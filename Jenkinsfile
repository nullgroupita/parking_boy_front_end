pipeline {
  agent any
  stages {
    stage('Deploy To Staging') {
      steps {
        sh '''cd /root/.jenkins/workspace/parking_boy_front_end_dev/dist
tar czvf /tmp/boy.tar ./ --warning=no-file-changed
scp -i /keys/null.pem /tmp/boy.tar centos@3.112.193.240:/tmp'''
      }
    }
  }
}