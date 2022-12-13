import 'package:flutter/material.dart';
import 'package:souvenir/screens/home/home_screen.dart';
void main() => runApp( const MyApp());

@immutable
class MyApp extends StatelessWidget {
      const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "hijkj",
      theme: ThemeData(
        primarySwatch: Colors.red
      ),
      home: const HomeScreen(),
    );
  }
}



