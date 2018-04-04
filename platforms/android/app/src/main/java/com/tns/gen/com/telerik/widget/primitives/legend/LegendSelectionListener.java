package com.tns.gen.com.telerik.widget.primitives.legend;

public class LegendSelectionListener implements com.telerik.widget.primitives.legend.LegendSelectionListener {
	public LegendSelectionListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void onLegendItemSelected(java.lang.Object param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onLegendItemSelected", void.class, args);
	}

}
