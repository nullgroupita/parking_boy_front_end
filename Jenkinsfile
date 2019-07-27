pipeline {
  agent any
  stages {
    stage('Deploy To Staging') {
      steps {
        sh '''cd /root/.jenkins/workspace/parking_boy_front_end_dev/dist
tar czvf boy.tar ./
scp -i /keys/null.pem boy.tar centos@3.112.193.240:/tmp
'''
      }
    }
  }
}