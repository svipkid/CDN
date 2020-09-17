---
title: catch-cat
date: 2020-09-17 14:29:04
type: "catch-cat"
---
{% note default %}
点击重置刷新地图，点击浅色圆点会建造一堵墙，每点击一下，小猫相应的逃亡一次。如果你成功的将小猫围困在墙内则获胜，小猫逃到地图边界则失败!
{% endnote %}
---
<div class="post__content">
  <script src="http://mrdavid.test.upcdn.net/CDN/game/catch-cat/phaser.min.js"></script>
  <script src="http://mrdavid.test.upcdn.net/CDN/game/catch-cat/catch-cat.min.js"></script>
<style>
#catch-the-cat{
  display:flex;
  justify-content:center
}
@media screen and (max-width:586px){
  #catch-the-cat canvas{
    width:100%!important;
	height:100%!important
	}
}
</style>
  <div id="catch-the-cat"></div>
<script>
  window.game=new CatchTheCatGame({w:11,h:11,r:20,backgroundColor:16711422,parent:"catch-the-cat",statusBarAlign:"center",credit:"Mr.D Game"})
</script>
</div>