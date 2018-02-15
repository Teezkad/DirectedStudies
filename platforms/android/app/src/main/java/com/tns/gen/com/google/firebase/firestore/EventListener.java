package com.tns.gen.com.google.firebase.firestore;

public class EventListener implements com.google.firebase.firestore.EventListener {
	public EventListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void onEvent(java.lang.Object param_0, com.google.firebase.firestore.FirebaseFirestoreException param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		com.tns.Runtime.callJSMethod(this, "onEvent", void.class, args);
	}

}
