package com.example.travel;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.widget.TextView;
import android.view.View;




public class MainActivity extends AppCompatActivity {
    Intent intent;
    String text;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //Style the ActionBar using a custom layout
        getSupportActionBar().setDisplayOptions(ActionBar.DISPLAY_SHOW_CUSTOM);
        getSupportActionBar().setCustomView(R.layout.mainactivity_action_bar);
    }

    public void press(View View){
        //Cast the View object as a TextView
        //Use the getText() getter method to obtain the text in the TextView
        //Use the toString() method to return the text as a String
        //If the String equals "View List", create an Intent for starting the ListAddresses Activity
        //Else, if the String equals "Search List", create an Intent for starting the SearchAddresses Activity
        
        text = ((TextView) View).getText().toString();

        if (text.equals("View List")) {
            //Create an Intent using the ListAddresses class
            intent = new Intent(this, ListAddresses.class);
            startActivity(intent);
        }

        else if (text.equals("Search List")) {
            //Create an Intent using the SearchAddresses class
            intent = new Intent(this, SearchAddresses.class);
            startActivity(intent);
        }
    }
}
