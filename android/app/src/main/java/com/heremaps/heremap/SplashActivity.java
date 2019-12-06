package com.heremaps.app.heremap;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;


import com.heremaps.app.MainActivity;
import com.heremaps.app.R;

public class SplashActivity extends AppCompatActivity {
    Double start_latitude = 10.0146196;
    Double start_longitude = 76.3625102;
    Double destination_latitude = 10.0068604;
    Double destination_longitude = 76.3717159;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);
        Intent intent = new Intent(this, MainActivity.class);
        Bundle bundle = new Bundle();
        bundle.putDouble(com.heremaps.app.heremap.BundleParamConstants.START_LAT,start_latitude);
        bundle.putDouble(com.heremaps.app.heremap.BundleParamConstants.START_LONG,start_longitude);
        bundle.putDouble(com.heremaps.app.heremap.BundleParamConstants.DESTINATION_LAT,destination_latitude);
        bundle.putDouble(com.heremaps.app.heremap.BundleParamConstants.DESTINATION_LONG,destination_longitude);
        intent.putExtras(bundle);
        startActivity(intent);
        finish();
    }
}
