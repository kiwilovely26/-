// pages/funning/funning.js
const Dialog = require('../../zanui/dialog/dialog');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    childrenFunningInfos:[
      {
        name: "杨夏朵",
        src: "http://p92ny3phk.bkt.clouddn.com/yangxiaduo.png",
        title: "小吃货朵朵",
        message: "朵儿很害羞，在外不喜欢跟人打招呼，但是如果告诉她，我这里有吃的，那么她会说那我们做好朋友吧！"
      }, {
      name:"朱歆恬",
      src:"http://p92ny3phk.bkt.clouddn.com/zhuxintian.png",      
      title:"听指挥的虫虫",
      message:"一天早上，虫虫醒来后看到妈妈还没有出门上班，就提出要妈妈送去幼儿园，这时外婆对她说：“那你要抓紧哦，不然妈妈送了你上班要迟到。” 虫虫听了以后，立刻就用她的小手紧紧的抓着被子... 宝贝，是让你抓紧时间，不是抓紧被子哦"      
    }, {
        name: "梁思园",
        src: "http://p92ny3phk.bkt.clouddn.com/liangsiyuan1.png",
        title:"古灵精怪的园园",
        message: "晚上该睡觉了，妈妈让园园穿鞋去洗澡，结果园园自己拿个玩具锅穿在脚底下。妈妈问：园园穿的什么鞋？园园回答：螃蟹……"
      }, {
      name:"张博然",
      src: "http://p92ny3phk.bkt.clouddn.com/zhangboran.png",
      title:"活泼爱动的然然",
      message:"最爱思考的你，眼睛珠子不听的转，提一些问题有些时候都把妈妈难住咯，不过也总是给妈妈惊喜；加油哦宝贝，妈妈爸爸爱你！"
    },{
      name:"孙艺萱",
      src: "http://p92ny3phk.bkt.clouddn.com/sunyixuan.png",
      title:"好吃嘴萱萱",
      message:"萱萱不论春夏秋冬去曼购都要买一个麦当劳的圆筒冰淇淋，我问她为什么每次都要买啊？她说，因为我是好吃嘴啊！"
      }, {
        name: "罗莯辰",
        src: "http://p92ny3phk.bkt.clouddn.com/luomuchen.png",
        title: "贪吃的罗小马",
        message: "宝宝特别想吃饼干，不知道从哪儿找到一块饼干，拿着饼干跟妈妈说：看嘛，跟你们说了，饼干放着不吃，叫你们不要浪费粮食的嘛。"
    }, {
      name: "杜羽心",
      src: "http://p92ny3phk.bkt.clouddn.com/duyuxin.png",
      title:"天真的心心",
      message:"带宝贝去补牙，补的时候宝贝很配合，医生阿姨不停夸宝贝很勇敢，走的时候宝贝说妈妈我的门牙也不好看，你给我再买一颗吧！"
    },
    {
      name: "许馨月",
      src: "http://p92ny3phk.bkt.clouddn.com/xuxinyue.png",
      title:"暖心的月月",
      message:"弟弟哭闹时，月月会学着大人的模样用手轻轻安抚弟弟并说：“乖～不哭不哭，姐姐爱你哈！”。如果哄了一会儿弟弟还是哭就会批评弟弟啦，“再哭我不理你咯！不给你讲故事咯……”"
    }, {
      name: "李梓萱",
      src: "http://p92ny3phk.bkt.clouddn.com/lizixuan.png",
      title:"奥特曼少女萱萱",
      message:"你刚3岁两个月，个子不算矮，有点小肉肉，喜欢奥特曼的女汉子，却又有着爱粉色和裙子的少女心，无论怎样的你都是爸爸妈妈的最爱！"
    }, {
      name: "赵梓彤",
      src: "http://p92ny3phk.bkt.clouddn.com/zhaozitong.png",
      title:"活学活用的彤彤",
      message:"幼儿园学习了《我看见的春天》，讲到了樱花，下午去户外活动，彤彤看到了学校里的花，就赶紧跑去问老师：“你看，这是不是樱花？真是太漂亮了～”"
    }, {
      name: "余紫辰",
      src: "http://p92ny3phk.bkt.clouddn.com/yuzichen1.png",
      title:"贴心的乐乐",
      message:"感冒的时候，乐乐会很主动关心哪里不舒服，然后自己搭个小板凳给妈妈拿药，还坚持要自己把药拆了，冲好端到面前才算完。"
    }, {
      name: "钟籽欣",
      src: "http://p92ny3phk.bkt.clouddn.com/zhongzixin.png",
      title:"实话实说的欣欣",
      message:"欣欣喜欢马，成都到绵阳的路上有一个地名叫“白马”，告诉她一次后她就记住了。每次去绵阳的路上，都吵着闹着要看白马，吵得烦了，就给她说白马死了，她问：“怎么死的呀？”那段时间成绵修路，老是堵车，就告诉她堵死的。她回家跟人聊天说：“我今天看到一匹马，死了，是堵死的。”"
    }, {
      name: "刘懿宽",
      src: "http://p92ny3phk.bkt.clouddn.com/liuyikuan.png",
      title:"小暖男宽哥",
      message: "宽宽：妈妈你看，这是我们幼儿园小朋友相互交换的礼物。妈妈：那你换到了什么呢？宽宽：我换到了一盒花花。妈妈：这个花花真漂亮。宽宽：对啊，是很漂亮，跟妈妈你一样漂亮。妈妈内心独白：每个妈妈在孩子心中都是美丽，无所不能的，孩子一句真挚的话语，足以让当妈的人热泪盈眶。"
    }, {
      name: "王宣贻",
      src: "http://p92ny3phk.bkt.clouddn.com/wangxuanyi.png",
      title:"实在的宣宣",
      message:"宣宣第一次很亲密的接触大型犬只，非常喜欢一只叫“京东”的蝴蝶犬。妈妈问她：“我们也买一只好吗？”原本以为她会说好，结果却被拒绝了。理由是“它太大了，我抱不动它”。看来养宠物一定是可以抱着好好疼爱的，这才是关键。"
    }, {
      name: "叶伊洛",
      src: "http://p92ny3phk.bkt.clouddn.com/yeyiluo.png",
      title:"调皮的伊洛",
      message:"慢热型小女生一枚，常自娱自乐。酷爱滑板车，一旦遇到玩滑板车的小朋友就立马追上去说，我们一起比赛吧！"
    }, {
      name: "林嫣",
      src: "http://p92ny3phk.bkt.clouddn.com/linyan.png",
      title:"臭美的嫣嫣",
      message:"有一天妈妈在工作，听到客厅传来蹬蹬蹬的鞋子敲击地板的声音，出去一看，嫣嫣居然找到了妈妈鞋柜里唯一的一双高跟鞋穿在脚上，正在镜子边上东瞧瞧西看看，还跟妈妈说，妈妈的高跟鞋好漂亮哦，等我长大了你给嫣嫣买高跟鞋哦…"
    }, {
      name: "李宏弟",
      src: "http://p92ny3phk.bkt.clouddn.com/lihongdi.png",
      title:"活力无限的弟弟",
      message:"活力无限的李宏弟，是天使是魔鬼，给我们无限的惊喜！"
    }, {
      name: "张峻瑜",
      src: "http://p92ny3phk.bkt.clouddn.com/zhangjunyu.png",
      title:"勇敢的淘淘",
      message:"淘淘边吃饭边跟妈妈说，乌云来了，轰隆隆。妈妈说，雷公公每天要检查小朋友吃饭乖不乖，不乖的雷公公就会生气╰_╯，轰隆隆。淘淘立马埋头扒几口饭，然后抬头强做镇定的说，我不怕雷公公，淘淘是勇敢的宝宝！"
    }, {
      name: "杨东辰",
      src: "http://p92ny3phk.bkt.clouddn.com/yangdongchen.png",
      title:"懂规矩的辰辰",
      message:"有一次辰辰和爷爷出去玩，看到狗狗嘴巴被封住了，好奇的辰辰问奶奶为什么。奶奶说因为它不听话，就把嘴巴封起来了。后来爷爷随地吐痰，辰辰就说，爷爷你不要乱吐口水，乱吐口水就把你的嘴巴封起来。"
    }, {
      name: "唐娅倩",
      src: "http://p92ny3phk.bkt.clouddn.com/tangyaqian.png",
      title:"小财迷糖果",
      message:"有一天，小糖果在沙发上发现了几个一毛钱的硬币，她大笑了几声：哈哈，我发财啦，发财啦！然后特别高兴的把硬币放进了存钱罐，然后满意的摇晃着存钱罐说：“我的电话手表就靠你啦！”拥有一只电话手表是她从去年开始到现在都还没有实现的梦想。"
    }, {
      name: "陈思宇",
      src: "http://p92ny3phk.bkt.clouddn.com/chensiyu.png",
      title:"小暖男乐乐",
      message:"乐乐是个小暖男，当爸爸出差回来的时候，他会说，我最爱我的爸爸妈妈了，我们要永远在一起，心都给妈妈暖化了喔..."
    },
      {
      name: "曹嘉钰",
      src: "http://p92ny3phk.bkt.clouddn.com/caojiayu.png",
      title:"小园丁嘉嘉",
      message:"嘉嘉很喜欢花花草草，每天起床后都要给花花浇水，热情的给最喜欢的多肉花花一天浇了3次水，嘉嘉说这样它就可以长高高了，哈哈，宝贝多肉植物要少浇水呦~"
    },  {
      name: "李依霏",
      src: "http://p92ny3phk.bkt.clouddn.com/liyifei.png",
      title:"好奇的霏霏",
      message:"霏霏是一万个为什么，她总是会问：“爸爸，遮住一个葫芦还有几个葫芦呀？我来数一下一、二、三...一共是6个葫芦”。“爸爸，这个是什么龟？”爸爸说：“海龟”，霏霏说：“不对，这个是玳瑁龟”，然后霏霏又问：“爸爸，玳瑁龟是什么龟啊？”爸爸竟然回答不了。霏霏每天都会做的事就是问爸爸妈妈各种问题，爸爸这个是什么呀？爸爸你知道我的好朋友是谁吗？爸爸这个是恐龙吗？这个是什么恐龙呀？"
    }, {
      name: "牛知仪",
      src: "http://p92ny3phk.bkt.clouddn.com/niuzhiyi.png",
      title:"爱蓝色的优优",
      message:"生活中的优优最爱蓝色，不论挑选衣物还是购买零食，只要蓝色包装都是大爱，所以优优是个十足的“蓝色控”。"
    }, {
      name: "陈思源",
      src: "http://p92ny3phk.bkt.clouddn.com/chensiyuan.png",
      title:"暖心的源源",
      message: "回家一进门，你就飞奔过来给妈妈一个大大的拥抱，要领着妈妈进客厅，妈妈说：宝贝，妈妈还没换鞋子呢！源源：妈妈让我来帮你吧！飞快的把妈妈的拖鞋拿过来，再蹲下帮妈妈把拖鞋穿好。妈妈：谢谢源源。源源：不用客气，爸爸你也需要帮忙吧，我帮来你，奶奶说，你已经等妈妈很久咯"
    },{
      name: "余宇航",
      src: "http://p92ny3phk.bkt.clouddn.com/yuyuhang.png",
      title:"‘坑妈’的航航",
      message: "航：我想爸爸了，我爸怎么还不回来呀？ 妈妈：那你不想妈妈呀？航：你又没上班呀！妈妈：...... 宝贝，这是在嫌弃妈妈没上班呀～"
    }]
  },  

  handleClick: function(event) {
    if(event.currentTarget.dataset.title && event.currentTarget.dataset.message){
      Dialog({
        title: event.currentTarget.dataset.title,
        message: event.currentTarget.dataset.message,
        selector: '#zan-dialog-test',
        confirmButtonText:"关闭"
      }).then((res) => {
      })
    }        
  } 
})