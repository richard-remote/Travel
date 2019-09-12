/*
************************************************************************************************************************************************************
List Addresses
1. Add a ListView object to the list_addresses layout 
2. Include an id for the layout
3. Import Bundle, AppCompatActivity, Menu, ArrayAdapter, ListView
4. Create a String array containing each of the the addresses
5. Create ListView and ArrayAdapter objects
6. Instantiate the ListView and ArrayAdapter objects
7. Set the ArrayAdapter for the ListView
************************************************************************************************************************************************************
*/
package com.example.travel;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;

public class List_Addresses extends AppCompatActivity {
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        setContentView(R.layout.list);
        getSupportActionBar().setTitle("View List");

    }
}
