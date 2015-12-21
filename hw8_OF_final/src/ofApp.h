#pragma once

#include "ofMain.h"

class ofApp : public ofBaseApp{
    
public:
    void setup();
    void update();
    void draw();
    
    void keyPressed(int key);
    void keyReleased(int key);
    void mouseMoved(int x, int y );
    void mouseDragged(int x, int y, int button);
    void mousePressed(int x, int y, int button);
    void mouseReleased(int x, int y, int button);
    void windowResized(int w, int h);
    void dragEvent(ofDragInfo dragInfo);
    void gotMessage(ofMessage msg);
    
    float a, b, c, d;
    
    float a1, b1, c1, d1;
    
    float x0, y0;
    float x1, y1;
    
    ofSoundPlayer chet;
    
    ofPoint pos;
    ofPoint speed;
    
    float * fftSmoothed;
    
    int nBandsToGet;

};
