package com.example.travel;

import android.content.Context;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.view.KeyEvent;
import android.view.inputmethod.EditorInfo;
import android.view.inputmethod.InputMethodManager;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.TextView;

public class Search_Results extends AppCompatActivity {
    ListView results_list;
    EditText editText;
    ArrayAdapter original_adapter, display_adapter;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        setContentView(R.layout.search);
        getSupportActionBar().setTitle("Search Zipcode");

        Homes first = new Homes(Homes.ADDRESS_ONE);
        Homes second = new Homes(Homes.ADDRESS_TWO);
        Homes third = new Homes(Homes.ADDRESS_THREE);

//        InputMethodManager inputMethodManager = (InputMethodManager) context.getSystemService(Context.INPUT_METHOD_SERVICE);

        editText = findViewById(R.id.input);
        //editText.setOnEditorActionListener(new TextView.OnEditorActionListener() {
        /*
            @Override
            public boolean onEditorAction(TextView v, int actionId, KeyEvent event) {
                boolean handled = false;
                    if (actionId == EditorInfo.IME_ACTION_SEARCH){
                        sendMessage();
                        handled = true;
                    }
                return handled;
            }
        });
        */


        results_list = findViewById(R.id.result_list);
        original_adapter = new ArrayAdapter<String>(this, R.layout.list_listview);

        original_adapter.add(first.getAll());
        original_adapter.add(second.getAll());
        original_adapter.add(third.getAll());

        display_adapter = original_adapter;
        results_list.setAdapter(display_adapter);
    }

    protected void update(){

    }
}
