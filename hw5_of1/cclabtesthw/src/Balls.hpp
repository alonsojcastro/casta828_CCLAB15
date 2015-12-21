//
//  Balls.hpp
//  cclabtest
//
//  Created by Alonso Castro on 11/3/15.
//
//

#pragma once

#include "ofMain.h"

class Balls {
public:
    Balls();
    
    void setup();
    void move();
    void display();
    void collide();
    
    ofPoint pos;
    ofPoint speed;
    
    int diameter;
    
    int r, g, b;
    
//    float vx;
//    float vy;


};