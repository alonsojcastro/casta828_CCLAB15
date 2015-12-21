//
//  shapes.cpp
//  cc_lab_hw_3
//
//  Created by Alonso Castro on 11/30/15.
//
//

#include "shapes.hpp"

#include "ofMain.h"

Shapes::Shapes(){
    posX = ofRandom(-5,30);
    posY = ofGetHeight()*0.5;

    velY = ofRandom(0,ofGetHeight());

    
}
//---------------------------------------------------------------------------------
void Shapes::setup(){
    r = ofRandom(255);
    g = ofRandom(255);
    b = ofRandom(255);
    

    
   
}
//---------------------------------------------------------------------------------
void Shapes::display(){

    ofSetColor(r, g, b);
    ofDrawLine(posX, posY, 10, 50);
    ofDrawLine(posX, posY, 60, 30);
    ofDrawLine(posX, posY, 10, 60);
    ofDrawLine(posX, posY, 80, 20);
    ofDrawLine(posX, posY, 10, 70);
    ofDrawLine(posX, posY, 100, 10);
    

}

//---------------------------------------------------------------------------------
void Shapes::move(){
    
    wave = true;
    
        
    if(wave==true){
        posX = ofGetFrameNum()%ofGetWidth();
        posY = velY+(600*sin(ofGetFrameNum()*0.01));

    }


    

}