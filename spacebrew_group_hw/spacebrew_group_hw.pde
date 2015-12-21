import processing.serial.*;
import spacebrew.*;
import cc.arduino.*;
import org.firmata.*;

int colorCounter;

Spacebrew sb;
Arduino arduino;
Serial port;

String server="149.31.135.144";
//String server="sandbox.spacebrew.cc";
//http://spacebrew.github.io/spacebrew/admin/admin.html?server=149.31.135.144
String name="CC Lab thing";
String description = "communicating with others";
 
void setup(){
 fullScreen();
//size(720, 1080);
  
  // instantiate the sb variable
  sb = new Spacebrew( this );

  //sb.addPublish ("alonsoCircle", "point2d", "{\"x\":0, \"y\":0}");
  sb.addPublish ("alonsoCircle", "boolean", true);
  sb.addSubscribe ("alonso", "point2d");
  sb.addSubscribe("alonso", "boolean");
  sb.connect(server, name, description);
 
}//end of setup

// vars to send/receive as JSON
PVector localPoint = new PVector(0,0);
PVector remotePoint = new PVector(0,0);
JSONObject outgoing = new JSONObject();


void draw(){
  //background(50);
  //draw keyboard
  for (int i = 0; i<801; i= i+100){
  fill(255);
  stroke(1);
  rect(width/3,i, width/3, height/8);
  //print(height/8);
  }
  
  for (int i = 150; i<351; i = i+100){
  fill(0);
  rect(width/3, i, width/4, height/10);
  }
  
  for (int i = 550; i<701; i = i+100){
  fill(0);
  rect(width/3, i, width/4, height/10);
  }

 ellipseMode(CENTER);
 noStroke();
 fill(255,6,107);
 ellipse(2*width/3+250, height/2, 300, 300);
 
  localPoint.set(mouseX, mouseY);

 fill(5-colorCounter, 255-colorCounter,255);
 fill(random(255), random(255), random(255));
 stroke(8);
 ellipse(remotePoint.x, remotePoint.y, 120, 120);
  //localPoint.set(mouseX, mouseY);

  //fill(0);
  //ellipse(localPoint.x, localPoint.y, 20,20);
  //fill(255);
  //ellipse(remotePoint.x, remotePoint.y, 20,20);
  
  outgoing.setInt("x", mouseX);
  outgoing.setInt("y", mouseY);
  
  // since point2d is just JSON, can use P5's built-in objects
  // with the 'toString' method that converts into a string
  // note: all custom type's values MUST be converted to string!
  sb.send("alonsoCircle", "point2d", outgoing.toString());

} 

void mousePressed(){
  sb.send("alonsoCircle", true);
}

void mouseReleased(){
  sb.send("alonsoCircle", false);
}

void onRangeMessage( String name, int value ){
  println("got range message " + name + " : " + value);
}

void onBooleanMessage( String name, boolean value ){
  println("got boolean message " + name + " : " + value); 
  if(value==true){
    
 }else{
 }
 
}

void onCustomMessage( String name, String type, String value ){
  if ( type.equals("point2d") ){
    // parse JSON!
    JSONObject m = JSONObject.parse( value );
    remotePoint.set( m.getInt("x"), m.getInt("y"));
  }
}