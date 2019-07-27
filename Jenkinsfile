pipeline {
  agent any
  stages {
    stage('NPM Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('NPM Build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Deploy To Staging') {
      steps {
        sh '''sudo cd /root/.jenkins/workspace/parking_boy_front_end_dev/dist
sudo tar czvf boy.tar ./

scp -i /keys/null.pem boy.tar centos@3.112.193.240:/tmp

ssh centos@3.112.193.240 -i /keys/null.pem > /dev/null 2>&1 <<\\ eeooff

sudo rm -rf  /usr/share/nginx/html/boy/*
sudo cp /tmp/boy.tar  /usr/share/nginx/html/boy
cd /usr/share/nginx/html/boy
sudo tar xzvf boy.tar

exit
eeooff'''
      }
    }
  }
}