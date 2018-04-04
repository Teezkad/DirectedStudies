package com.tns.gen.com.telerik.widget.chart.visualization.behaviors;

public class ChartSelectionChangeListener implements com.telerik.widget.chart.visualization.behaviors.ChartSelectionChangeListener {
	public ChartSelectionChangeListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void onSelectionChanged(com.telerik.widget.chart.visualization.behaviors.ChartSelectionContext param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onSelectionChanged", void.class, args);
	}

}
