#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    ofSetColor(255);
    size=50;
}

//--------------------------------------------------------------
void ofApp::update(){
    
}

//--------------------------------------------------------------
void ofApp::draw(){
    ofBackground(222, 120, 50);
    //    for (float i = 0; i < 2*PI; i+=(2*PI/10)){
    //        ofLine(ofGetWindowWidth()/2, ofGetWindowHeight()/2, cos[i], sin[i]);
    
    
    time = ofGetElapsedTimef();
    //cout << time >> endl;
    
    ofLine(ofGetWindowWidth()/2, ofGetWindowHeight()/2, ofGetWindowWidth()/2+cos(time)*size, ofGetWindowHeight()/2+sin(time)*size);
    
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

//--------------------------------------------------------------
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
