package com.tns.gen.com.telerik.widget.chart.visualization.behaviors;

public class PanZoomListener implements com.telerik.widget.chart.visualization.behaviors.PanZoomListener {
	public PanZoomListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void onPan(double param_0, double param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		com.tns.Runtime.callJSMethod(this, "onPan", void.class, args);
	}

	public void onZoom(double param_0, double param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		com.tns.Runtime.callJSMethod(this, "onZoom", void.class, args);
	}

}
