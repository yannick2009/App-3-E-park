import 'package:flutter/material.dart';
import 'package:souvenir/components/drawer/custom_drawer.dart';


class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      extendBodyBehindAppBar: true,
      appBar: AppBar(
        iconTheme: const IconThemeData(
          color: Colors.black
        ),
        elevation: 0,
        backgroundColor: Colors.transparent,
      ),
      drawer: const CustomDrawer(),
      body: const Center(
        child: Text('Full SECURITY',style: TextStyle(color:Colors.black,fontSize: 30,backgroundColor: Colors.yellow,),),
      ),
    );
  }
}
