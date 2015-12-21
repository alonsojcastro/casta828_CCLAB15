#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
ofBackground(0);

// load in sounds:
chet.load("Chet Faker - Talk Is Cheap.mp3");

// the fft needs to be smoothed out, so we create an array of floats
// for that purpose:
fftSmoothed = new float[8192];
for (int i = 0; i < 8192; i++){
    fftSmoothed[i] = 0;
}

nBandsToGet = 128;
}

//--------------------------------------------------------------
void ofApp::update(){

// update the sound playing system:
ofSoundUpdate();
    
    if (x0 == 0){
        x0 = 0;
        //            x1 *= 5;
        chet.play();
    } else if (y0 == 0){
        y0 = 0;
        //            y1 *= 5;
        chet.play();
    }
}

//--------------------------------------------------------------
void ofApp::draw(){
    int n = 20000;
    
    a = 3.7 + sin(ofGetElapsedTimef());
    b = 0.59;
    c = 0.36;
    d = 2.2;
    
    a1 = 2.24 + cos(ofGetElapsedTimef());
    b1 = 0.43;
    c1 = 0.65;
    d1 = 2.43;
    
    x0, y0, x1, y1 = 0;
    
    ofSetColor(ofRandom(255), ofRandom(255), ofRandom(255));
    
    ofTranslate(ofGetWidth()/2, ofGetHeight()/2);
    ofScale(200, 200, 200);
    
    for (int i = 0; i < n; i++){
        x1 = cos(a*y0) - sin(b*x0);
        y1 = cos(c*x0) - sin(d*y0);
        
        ofDrawLine(x1, y1, x1+0.005, y1);
        
        x0 = x1;
        y0 = y1;
    }
    
    for (int i = 0; i < n; i++){
        x1 = sin(a1*y0) - cos(b1*x0);
        y1 = sin(c1*x0) - cos(d1*y0);
        
        ofDrawLine(x1, y1, x1+0.005, y1);
        
        x0 = x1;
        y0 = y1;
    }

}


//--------------------------------------------------------------
void ofApp::keyPressed(int key){
}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){
    
}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){
    
}

void ofApp::mouseDragged(int x, int y, int button){
    
}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){
    
}


//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){
    
}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){
    
}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){
    
}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){
    
}
