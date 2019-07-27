pipeline {
  agent any
  stages {
    stage('Deploy To Staging') {
      steps {
        sh '''cd /root/.jenkins/workspace/parking_boy_front_end_dev/dist
sudo tar czvf boy.tar ./
sudo scp -i /keys/null.pem boy.tar centos@3.112.193.240:/tmp
'''
      }
    }
  }
}