package com.heremaps.app.heremap;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * SplashScreen
 * 启动屏
 * from：http://www.devio.org
 * Author:CrazyCodeBoy
 * GitHub:https://github.com/crazycodeboy
 * Email:crazycodeboy@gmail.com
 */
public class HereMapModule extends ReactContextBaseJavaModule{
    public HereMapModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "HereMap";
    }

    /**
     * 打开启动屏
     */
    @ReactMethod
    public void load(Double start_latitude,Double start_longitude, Double destination_latitude, Double destination_longitude) {
        Double start_latitude_default = 10.0146196;
        Double start_longitude_default = 76.3625102;
        Double destination_latitude_default = 10.0068604;
        Double destination_longitude_default = 76.3717159;
        Intent newIntent = new Intent(getCurrentActivity(), com.heremaps.app.heremap.MainActivity.class);
        Bundle bundle = new Bundle();
        bundle.putDouble(com.heremaps.app.heremap.BundleParamConstants.START_LAT, start_latitude != null ? start_latitude : start_latitude_default );
        bundle.putDouble(com.heremaps.app.heremap.BundleParamConstants.START_LONG,start_longitude != null ? start_longitude : start_longitude_default);
        bundle.putDouble(com.heremaps.app.heremap.BundleParamConstants.DESTINATION_LAT,destination_latitude != null ? destination_latitude : destination_latitude_default);
        bundle.putDouble(com.heremaps.app.heremap.BundleParamConstants.DESTINATION_LONG,destination_longitude != null ? destination_longitude : destination_longitude_default);
        newIntent.putExtras(bundle);
        getCurrentActivity().startActivity(newIntent);
       // Toast.makeText(getCurrentActivity(), "Hello Calling from android native", Toast.LENGTH_SHORT).show();
    }

    /**
     * 关闭启动屏
     */
    @ReactMethod
    public void hide() {

    }
}