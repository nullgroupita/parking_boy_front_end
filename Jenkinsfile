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
    stage('Deploy To Product') {
      steps {
        sh '''cd /root/.jenkins/workspace/parking_boy_front_end_dev/dist
tar czvf /tmp/boy.tar ./ --warning=no-file-changed
scp -i /keys/null.pem /tmp/boy.tar centos@3.112.193.240:/tmp
ssh centos@3.112.193.240 -i /keys/null.pem > /dev/null 2>&1 <<\\ eeooff

sudo rm -rf  /usr/share/nginx/html/boy/*
sudo cp /tmp/boy.tar  /usr/share/nginx/html/boy
cd /usr/share/nginx/html/boy
sudo tar xzvf boy.tar

exit
eeooff
'''
      }
    }
  }
}