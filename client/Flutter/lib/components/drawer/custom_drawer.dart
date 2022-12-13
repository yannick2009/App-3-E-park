import 'package:flutter/material.dart';
import 'package:souvenir/components/drawer/custom_list_tile.dart';
import 'package:souvenir/components/drawer/header.dart';
import 'package:souvenir/components/drawer/bottom_user_info.dart';




class CustomDrawer extends StatefulWidget {
  const CustomDrawer({Key? key}) : super(key: key);

  @override
  State<CustomDrawer> createState() => _CustomDrawerState();
}

class _CustomDrawerState extends State<CustomDrawer> {
  bool _isCollapsed = false ;
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: AnimatedContainer(
        curve: Curves.easeInOutCubic,
        duration: const Duration(milliseconds: 500),
        width: _isCollapsed ? 300:70,
        margin: const EdgeInsets.only(bottom: 10,top:10),
        decoration: const BoxDecoration(
          borderRadius: BorderRadius.only(
            bottomRight: Radius.circular(10),
            topRight: Radius.circular(10),
          ),
          color: Color.fromRGBO(20,20,20,1),
        ),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal:10),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              CustomDrawerHeader(isColapsed: _isCollapsed),
              const Divider(
                color: Colors.grey,
              ),
              CustomListTile(
                isCollapsed: _isCollapsed,
                icon: Icons.account_balance_wallet_sharp,
                title: 'PAY',
                infoCount: 0,
              ),
              CustomListTile(
                isCollapsed: _isCollapsed,
                icon: Icons.calendar_today,
                title: 'Calender',
                infoCount: 0,
              ),
              CustomListTile(isCollapsed: _isCollapsed, icon: Icons.cloud, title: 'Weather', infoCount: 0,doHaveMoreOptions: Icons.arrow_forward_ios,),
              CustomListTile(isCollapsed: _isCollapsed, icon: Icons.add_a_photo, title: ' SNAP', infoCount: 0,doHaveMoreOptions: Icons.arrow_back_ios,),
              const Divider(color: Colors.grey,),
              const Spacer(),
              CustomListTile(
                isCollapsed: _isCollapsed,
                icon: Icons.notifications,
                title: 'Notifications',
                infoCount: 2,
              ),
              CustomListTile(
                isCollapsed: _isCollapsed,
                icon: Icons.settings,
                title: 'Settings',
                infoCount: 0,
              ),
              const SizedBox(height: 10),
              BottomUserInfo(isCollapsed: _isCollapsed),
              Align(
                alignment: _isCollapsed
                    ? Alignment.bottomRight
                    : Alignment.bottomCenter,
                child: IconButton(
                  splashColor: Colors.transparent,
                  icon: Icon(
                    _isCollapsed
                        ? Icons.arrow_back_ios
                        : Icons.arrow_forward_ios,
                    color: Colors.white,
                  ),
                  onPressed: (){
                    setState(() {
                      _isCollapsed = !_isCollapsed;
                    });
                  },
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
