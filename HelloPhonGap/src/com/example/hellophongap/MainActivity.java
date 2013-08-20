package com.example.hellophongap;

import org.apache.cordova.DroidGap;

import android.os.Bundle;
import android.os.DropBoxManager;
import android.app.Activity;
import android.view.Menu;

public class MainActivity extends DroidGap {

  
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");  
    }


   
   
    
}
