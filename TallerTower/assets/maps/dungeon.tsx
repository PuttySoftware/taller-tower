<?xml version="1.0" encoding="UTF-8"?>
<tileset name="dungeon" tilewidth="64" tileheight="64" tilecount="74" columns="0">
 <grid orientation="orthogonal" width="1" height="1"/>
 <terraintypes>
  <terrain name="Ice" tile="25"/>
  <terrain name="Tile" tile="62"/>
 </terraintypes>
 <tile id="0">
  <image width="64" height="64" source="../tiles/amulet.png"/>
 </tile>
 <tile id="1">
  <image width="64" height="64" source="../tiles/armor_shop.png"/>
 </tile>
 <tile id="2">
  <image width="64" height="64" source="../tiles/bank.png"/>
 </tile>
 <tile id="3">
  <image width="64" height="64" source="../tiles/blue_button.png"/>
 </tile>
 <tile id="4" type="PassThrough">
  <properties>
   <property name="toggle" type="int" value="5"/>
  </properties>
  <image width="64" height="64" source="../tiles/blue_off_wall.png"/>
 </tile>
 <tile id="5" type="Wall">
  <properties>
   <property name="toggle" type="int" value="4"/>
  </properties>
  <image width="64" height="64" source="../tiles/blue_wall.png"/>
 </tile>
 <tile id="6">
  <image width="64" height="64" source="../tiles/ccw_rotation_trap.png"/>
 </tile>
 <tile id="7">
  <image width="64" height="64" source="../tiles/closed_door.png"/>
 </tile>
 <tile id="8">
  <image width="64" height="64" source="../tiles/confusion_trap.png"/>
 </tile>
 <tile id="9">
  <image width="64" height="64" source="../tiles/cw_rotation_trap.png"/>
 </tile>
 <tile id="10">
  <image width="64" height="64" source="../tiles/cyan_button.png"/>
 </tile>
 <tile id="11" type="PassThrough">
  <properties>
   <property name="toggle" type="int" value="12"/>
  </properties>
  <image width="64" height="64" source="../tiles/cyan_off_wall.png"/>
 </tile>
 <tile id="12" type="Wall">
  <properties>
   <property name="toggle" type="int" value="11"/>
  </properties>
  <image width="64" height="64" source="../tiles/cyan_wall.png"/>
 </tile>
 <tile id="13">
  <image width="64" height="64" source="../tiles/dark_gem.png"/>
 </tile>
 <tile id="14">
  <image width="64" height="64" source="../tiles/dizziness_trap.png"/>
 </tile>
 <tile id="15">
  <image width="64" height="64" source="../tiles/drunk_trap.png"/>
 </tile>
 <tile id="16" type="PassThrough">
  <image width="64" height="64" source="../tiles/empty.png"/>
 </tile>
 <tile id="17">
  <image width="64" height="64" source="../tiles/enhancement_shop.png"/>
 </tile>
 <tile id="18">
  <image width="64" height="64" source="../tiles/faith_power_shop.png"/>
 </tile>
 <tile id="19">
  <image width="64" height="64" source="../tiles/green_button.png"/>
 </tile>
 <tile id="20" type="PassThrough">
  <image width="64" height="64" source="../tiles/green_off_wall.png"/>
 </tile>
 <tile id="21" type="Wall">
  <image width="64" height="64" source="../tiles/green_wall.png"/>
 </tile>
 <tile id="22">
  <image width="64" height="64" source="../tiles/heal_shop.png"/>
 </tile>
 <tile id="23">
  <image width="64" height="64" source="../tiles/heal_trap.png"/>
 </tile>
 <tile id="24">
  <image width="64" height="64" source="../tiles/hurt_trap.png"/>
 </tile>
 <tile id="25" type="SlideGround">
  <image width="64" height="64" source="../tiles/ice.png"/>
 </tile>
 <tile id="26">
  <image width="64" height="64" source="../tiles/item_shop.png"/>
 </tile>
 <tile id="27">
  <image width="64" height="64" source="../tiles/light_gem.png"/>
 </tile>
 <tile id="28">
  <image width="64" height="64" source="../tiles/magenta_button.png"/>
 </tile>
 <tile id="29" type="PassThrough">
  <image width="64" height="64" source="../tiles/magenta_off_wall.png"/>
 </tile>
 <tile id="30" type="Wall">
  <image width="64" height="64" source="../tiles/magenta_wall.png"/>
 </tile>
 <tile id="31">
  <image width="64" height="64" source="../tiles/metal_button.png"/>
 </tile>
 <tile id="32" type="PassThrough">
  <image width="64" height="64" source="../tiles/metal_off_wall.png"/>
 </tile>
 <tile id="33" type="Wall">
  <image width="64" height="64" source="../tiles/metal_wall.png"/>
 </tile>
 <tile id="34">
  <image width="64" height="64" source="../tiles/monster.png"/>
 </tile>
 <tile id="35" type="Wall">
  <image width="64" height="64" source="../tiles/nothing.png"/>
 </tile>
 <tile id="36">
  <image width="64" height="64" source="../tiles/open_door.png"/>
 </tile>
 <tile id="37">
  <image width="64" height="64" source="../tiles/orange_button.png"/>
 </tile>
 <tile id="38" type="PassThrough">
  <image width="64" height="64" source="../tiles/orange_off_wall.png"/>
 </tile>
 <tile id="39" type="Wall">
  <image width="64" height="64" source="../tiles/orange_wall.png"/>
 </tile>
 <tile id="40">
  <image width="64" height="64" source="../tiles/player.png"/>
 </tile>
 <tile id="41">
  <image width="64" height="64" source="../tiles/purple_button.png"/>
 </tile>
 <tile id="42" type="PassThrough">
  <image width="64" height="64" source="../tiles/purple_off_wall.png"/>
 </tile>
 <tile id="43" type="Wall">
  <image width="64" height="64" source="../tiles/purple_wall.png"/>
 </tile>
 <tile id="44">
  <image width="64" height="64" source="../tiles/red_button.png"/>
 </tile>
 <tile id="45" type="PassThrough">
  <image width="64" height="64" source="../tiles/red_off_wall.png"/>
 </tile>
 <tile id="46" type="Wall">
  <image width="64" height="64" source="../tiles/red_wall.png"/>
 </tile>
 <tile id="47">
  <image width="64" height="64" source="../tiles/regenerator.png"/>
 </tile>
 <tile id="48">
  <image width="64" height="64" source="../tiles/rose_button.png"/>
 </tile>
 <tile id="49" type="PassThrough">
  <image width="64" height="64" source="../tiles/rose_off_wall.png"/>
 </tile>
 <tile id="50" type="Wall">
  <image width="64" height="64" source="../tiles/rose_wall.png"/>
 </tile>
 <tile id="51" type="Wall">
  <image width="64" height="64" source="../tiles/sealing_wall.png"/>
 </tile>
 <tile id="52">
  <image width="64" height="64" source="../tiles/seaweed_button.png"/>
 </tile>
 <tile id="53" type="PassThrough">
  <image width="64" height="64" source="../tiles/seaweed_off_wall.png"/>
 </tile>
 <tile id="54" type="Wall">
  <image width="64" height="64" source="../tiles/seaweed_wall.png"/>
 </tile>
 <tile id="55">
  <image width="64" height="64" source="../tiles/sky_button.png"/>
 </tile>
 <tile id="56" type="PassThrough">
  <image width="64" height="64" source="../tiles/sky_off_wall.png"/>
 </tile>
 <tile id="57" type="Wall">
  <image width="64" height="64" source="../tiles/sky_wall.png"/>
 </tile>
 <tile id="58">
  <image width="64" height="64" source="../tiles/socks_shop.png"/>
 </tile>
 <tile id="59">
  <image width="64" height="64" source="../tiles/spell_shop.png"/>
 </tile>
 <tile id="60">
  <image width="64" height="64" source="../tiles/stairs_down.png"/>
 </tile>
 <tile id="61">
  <image width="64" height="64" source="../tiles/stairs_up.png"/>
 </tile>
 <tile id="62" type="Ground">
  <image width="64" height="64" source="../tiles/tile.png"/>
 </tile>
 <tile id="63">
  <image width="64" height="64" source="../tiles/u_turn_trap.png"/>
 </tile>
 <tile id="64">
  <image width="64" height="64" source="../tiles/variable_heal_trap.png"/>
 </tile>
 <tile id="65">
  <image width="64" height="64" source="../tiles/variable_hurt_trap.png"/>
 </tile>
 <tile id="66">
  <image width="64" height="64" source="../tiles/warp_trap.png"/>
 </tile>
 <tile id="67">
  <image width="64" height="64" source="../tiles/weapons_shop.png"/>
 </tile>
 <tile id="68">
  <image width="64" height="64" source="../tiles/white_button.png"/>
 </tile>
 <tile id="69" type="PassThrough">
  <image width="64" height="64" source="../tiles/white_off_wall.png"/>
 </tile>
 <tile id="70" type="Wall">
  <image width="64" height="64" source="../tiles/white_wall.png"/>
 </tile>
 <tile id="71">
  <image width="64" height="64" source="../tiles/yellow_button.png"/>
 </tile>
 <tile id="72" type="PassThrough">
  <image width="64" height="64" source="../tiles/yellow_off_wall.png"/>
 </tile>
 <tile id="73" type="Wall">
  <image width="64" height="64" source="../tiles/yellow_wall.png"/>
 </tile>
</tileset>
