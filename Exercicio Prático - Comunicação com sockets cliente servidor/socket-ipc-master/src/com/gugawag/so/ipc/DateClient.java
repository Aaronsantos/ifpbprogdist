package com.gugawag.so.ipc;

/**
 * Client program requesting current date from server.
 *
 * Figure 3.22
 *
 * @author Silberschatz, Gagne and Galvin. Pequenas alterações feitas por Gustavo Wagner (gugawag@gmail.com)
 * Operating System Concepts  - Eighth Edition
 */ 

import java.net.*;
import java.io.*;
import java.util.Scanner;

public class DateClient {

	public static Socket socket;
	public static InputStream inputStream;
	public static BufferedReader bin;
	public static Scanner userIn = new Scanner(System.in);

	public static void main(String[] args)  {
		try {
			//DateClient.start();
			//String line = bin.readLine();
			//DateClient.end();
			DateClient.readCommand();
		}
		catch (Exception ioe) {
				System.err.println(ioe);
		}
	}

	public static void start() throws Exception {
		DateClient.socket = new Socket("10.0.4.135",6013);
		DateClient.inputStream = DateClient.socket.getInputStream();
		DateClient.bin = new BufferedReader(new InputStreamReader(DateClient.inputStream));

	}

	public static void readCommand() {

		String input = DateClient.userIn.nextLine();

		String inputArgs[] = input.split(" ");

		if(inputArgs[0].equals("readdir")) {

			System.out.println("Comando listar");
		}else if(inputArgs[0].equals("rename")) {
			System.out.println("Comando renomear");
		} else if(inputArgs[0].equals("create")) {

			System.out.println("Comando criar");
		} else if(inputArgs[0].equals("remove")) {

			System.out.println("Comando remover");
		} else if(inputArgs[0].equals("help")){
			System.out.println("Cliente ");
		}else {
			System.out.println("Comando não encontrado");
		}
	}

	public static void end() throws Exception {
		DateClient.socket.close();

	}

}




