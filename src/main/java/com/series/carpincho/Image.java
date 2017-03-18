package com.series.carpincho;

public class Image {

	private String fileName;

	public Image(String description, String fileName) {
		super();
		this.fileName = fileName;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	@Override
	public String toString() {
		return "Image [ fileName=" + fileName + "]";
	}

}
