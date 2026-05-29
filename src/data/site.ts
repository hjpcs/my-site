export type NavLink = { href: string; label: string };

export type Character = {
  initial: string;
  name: string;
  title: string;
  desc: string;
};

export type Treasure = {
  icon: string;
  name: string;
  grade: string;
  desc: string;
};

export type Honor = {
  icon: string;
  title: string;
  desc: string;
  year: number;
};

export type Stat = {
  num: string;
  unit?: string;
  name: string;
};

export type StoryBlock =
  | { type: "p"; text: string }
  | { type: "quote"; text: string };

export const nav = {
  brand: "凡人修仙传",
  subBrand: "人界篇",
  links: [
    { href: "#story", label: "故事" },
    { href: "#characters", label: "人物" },
    { href: "#treasures", label: "法宝" },
    { href: "#honors", label: "荣誉" },
    { href: "#stats", label: "数据" },
  ] satisfies NavLink[],
};

export const hero = {
  mark: "凡",
  greet: "一位道友云游至此",
  title: "凡人修仙传",
  sub: "人 界 篇",
  desc: [
    "资质平庸的山村少年，意外踏入修仙之途。",
    "步步为营，以凡人之躯，证道长生。",
  ],
  scrollHint: "向下探索",
};

export const story = {
  id: "story",
  label: "STORY",
  title: "故事简介",
  subtitle: "一段最励志的凡人修仙传奇",
  blocks: [
    {
      type: "p",
      text: "一个出身平凡的穷小子，资质普通却心志坚韧。在尔虞我诈、弱肉强食的修仙世界中，他靠着坚定的意志与过人的心智，一步步走向巅峰。",
    },
    {
      type: "p",
      text: "从七玄门到黄枫谷，从乱星海到大晋，韩立用他的「韩跑跑」式谨慎与「韩老魔」式狠辣，书写了一段最励志的凡人修仙传奇。",
    },
    { type: "quote", text: "人界篇，是这一切传奇的起点。" },
    {
      type: "p",
      text: "他无背景、无奇遇、无天赋三无开局，却凭一手谨慎、勤奋与狠绝，在残酷的修仙世界中一步步崛起，结金丹、化元婴，最终踏向化神之路。",
    },
  ] satisfies StoryBlock[],
};

export const charactersSection = {
  id: "characters",
  label: "CHARACTERS",
  title: "主要人物",
  subtitle: "凡人修仙路上的同行者",
  items: [
    {
      initial: "韩",
      name: "韩立",
      title: "谨慎流修仙者",
      desc: "资质平庸的凡人少年，凭借坚定意志与极致谨慎走向修仙巅峰。「韩跑跑」式保命、「韩老魔」式狠辣，缺一不可。",
    },
    {
      initial: "南",
      name: "南宫婉",
      title: "掩月宗第一美女",
      desc: "天赋绝佳的女修，与韩立结为道侣。在漫长岁月中始终陪伴韩立左右，是真正的修仙伴侣。",
    },
    {
      initial: "银",
      name: "银月",
      title: "幻灵狐 · 上古妖兽",
      desc: "银月天狼幼体，以幻灵狐形态长伴韩立，是其闯荡人界最亲密的得力助手。",
    },
    {
      initial: "墨",
      name: "墨大夫",
      title: "江湖少年的引路人",
      desc: "韩立修仙之路真正的启蒙者，授予其长春功根基。亦师亦敌的复杂关系，奠定了韩立谨慎处世的底色。",
    },
    {
      initial: "墨",
      name: "墨彩环",
      title: "白月光 · 凡人岁月",
      desc: "温柔清冷、内敛长情。她代表着韩立未曾踏入修仙界时本可拥有的平凡人生。",
    },
    {
      initial: "大",
      name: "大衍神君",
      title: "阵法傀儡神识无双",
      desc: "人界古修，自负孤傲。其遗留的传承让韩立的阵法与傀儡修为产生质的飞跃。",
    },
  ] satisfies Character[],
};

export const treasuresSection = {
  id: "treasures",
  label: "TREASURES",
  title: "法宝灵兽",
  subtitle: "韩立的杀手锏与压箱底",
  items: [
    {
      icon: "⚔️",
      name: "青竹蜂云剑",
      grade: "★ 灵宝级 · 主战法宝",
      desc: "韩立的招牌剑阵，由七十二口飞剑化作蜂群肆虐敌阵，是其结丹期的杀手锏。",
    },
    {
      icon: "🕷️",
      name: "血玉蜘蛛",
      grade: "★ 上古异种 · 灵宠",
      desc: "阴狠诡邪、专攻神魂。蜘蛛丝坚韧无比，可生吞元婴之体。",
    },
    {
      icon: "⚡",
      name: "辟邪神雷",
      grade: "★ 雷系神通 · 一击必杀",
      desc: '韩立独门雷法，对鬼修与魔道修士有天然克制，是真正的"开局必杀技"。',
    },
    {
      icon: "🪭",
      name: "三焰扇",
      grade: "★ 灵宝级 · 仿制神器",
      desc: "受限于人界资源由七焰扇降级炼制，三色神焰焚天灭地，威力依旧惊人。",
    },
    {
      icon: "🪡",
      name: "青冥针",
      grade: "★ 神识攻击 · 暗器之王",
      desc: "无声无息直击神魂，元婴大能也要避其锋芒。韩立保命与刺杀的双面利器。",
    },
    {
      icon: "🛡️",
      name: "太一化清符",
      grade: "★ 保命神符 · 化清替劫",
      desc: "关键时刻替主承受致命伤害，保住元婴与神魂不灭。多出一次保命机会。",
    },
  ] satisfies Treasure[],
};

export const honorsSection = {
  id: "honors",
  label: "HONORS",
  title: "荣誉殿堂",
  subtitle: "国漫标杆的荣耀之路",
  items: [
    {
      icon: "🏆",
      title: "国风传承奖",
      desc: "第18届中国动漫金龙奖 · 以精致 3D 技术呈现中国传统修仙文化",
      year: 2021,
    },
    {
      icon: "⭐",
      title: "年度国漫",
      desc: "微博文化之夜盛典 · 凭借现象级影响力与口碑荣获年度大奖",
      year: 2022,
    },
    {
      icon: "🎬",
      title: "最佳 3D 动画",
      desc: "第28届亚洲电视大奖 · 代表中国 3D 动画技术的最高水平",
      year: 2023,
    },
    {
      icon: "📜",
      title: "最佳剧情奖",
      desc: "年度国漫年番颁奖典礼 · 韩立结婴等经典剧情获得年度最佳",
      year: 2024,
    },
    {
      icon: "📺",
      title: "央视纪录片展示案例",
      desc: "作为中国动画工业化代表作品入选《大国基石》",
      year: 2024,
    },
    {
      icon: "🌏",
      title: "海外播出登顶",
      desc: "B站国创区年度收视冠军 · 海外流媒体累计播放量突破 10 亿次",
      year: 2025,
    },
  ] satisfies Honor[],
};

export const statsSection = {
  id: "stats",
  label: "DATA",
  title: "数据概览",
  subtitle: "B 站国创现象级作品",
  items: [
    { num: "60", unit: "亿+", name: "系列累计播放量" },
    { num: "1200", unit: "万+", name: "B 站追番人数" },
    { num: "9.9", name: "B 站评分" },
    { num: "8.7", name: "豆瓣评分" },
    { num: "170", unit: "+", name: "已播出集数" },
    { num: "2", unit: "年", name: "国创区收视第一" },
  ] satisfies Stat[],
};

export const footer = {
  mark: "凡",
  disclaimer: [
    "本网站为粉丝自制宣传站，内容来源网络，版权归原作者及平台所有。",
    "仅供爱好者学习交流，不作任何商业用途。",
  ],
};
