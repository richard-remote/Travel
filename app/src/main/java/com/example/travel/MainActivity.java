package com.example.travel;

import android.content.Intent;
//
import android.os.Bundle;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.TextView;




public class MainActivity extends AppCompatActivity {
    Intent intent;
    String text;
    TextView textViewViewList, textViewSearchList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //Style the ActionBar using a custom layout
        getSupportActionBar().setDisplayOptions(ActionBar.DISPLAY_SHOW_CUSTOM);
        getSupportActionBar().setCustomView(R.layout.mainactivity_action_bar);

        //Instantiate Button objects using the id in activity_main.xml
        textViewViewList = findViewById(R.id.viewList);
        textViewSearchList= findViewById(R.id.searchList);

        textViewViewList.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                intent = new Intent(MainActivity.this, List_Addresses.class);
                startActivity(intent);
            }
        });

        textViewSearchList.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                intent = new Intent(MainActivity.this, Search_Results.class);
                startActivity(intent);
            }
        });

    }
}
