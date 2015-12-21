//
//  shapes.hpp
//  cc_lab_hw_3
//
//  Created by Alonso Castro on 11/30/15.
//
//

#ifndef shapes_hpp
#define shapes_hpp

#include <stdio.h>

#include "ofMain.h"

#endif /* shapes_hpp */

class Shapes{
public:
    //constructor class
    Shapes();
    
    //variables
    float posX, posY;
    float size;
    float r, g, b;
    float velX, velY;
    
    float A, B, C, D;
    
    float x0, y0;
    float x1, y1;
    Boolean wave;
    
    //methods
    void setup();
    void display();
    void move();
    
    
};