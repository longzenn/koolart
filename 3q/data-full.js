// data-full.js
// Danh sách hơn 100 nhân vật Tam Quốc với avatar, nhóm, tiểu sử và mối quan hệ

const nodes = [
  // Thục
  { id: "Lưu Bị", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/7/70/Liu_Bei_Portrait.jpg", bio: "Hoàng đế khai quốc Thục Hán, nổi tiếng vì nhân nghĩa và tình huynh đệ với Quan Vũ và Trương Phi." },
  { id: "Quan Vũ", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Guan_Yu_statue.jpg", bio: "Danh tướng Thục Hán, được tôn sùng như Võ Thánh, là anh em kết nghĩa với Lưu Bị." },
  { id: "Trương Phi", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/5/55/Zhang_Fei_statue.jpg", bio: "Một trong ba anh em kết nghĩa Lưu Quan Trương, nổi tiếng vì tính khí nóng nảy nhưng trung nghĩa." },
  { id: "Gia Cát Lượng", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/9/92/Zhuge_Liang_portrait.jpg", bio: "Khổng Minh, thừa tướng Thục Hán, nhà chiến lược và quân sư thiên tài thời Tam Quốc." },
  { id: "Triệu Vân", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/b/be/Zhao_Yun_statue.jpg", bio: "Dũng tướng Thục Hán, nổi tiếng qua trận cứu A Đẩu tại Trường Bản." },
  { id: "Ngụy Diên", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/6/67/Wei_Yan_statue.jpg", bio: "Danh tướng Thục Hán, lập nhiều chiến công nhưng bị nghi kỵ và kết cục bi thảm." },
  { id: "Mã Siêu", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Ma_Chao_statue.jpg", bio: "Một trong Ngũ hổ tướng, từng chống Tào Tháo trước khi theo Lưu Bị." },
  { id: "Hoàng Trung", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Huang_Zhong_statue.jpg", bio: "Lão tướng Thục Hán, lừng danh với chiến công tại Định Quân Sơn." },
  { id: "Pháp Chính", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Fa_Zheng_portrait.jpg" },
  { id: "Bàng Thống", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Pang_Tong_portrait.jpg" },
  { id: "Hoàng Nguyệt Anh", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/7/74/Huang_Yueying.jpg" },
  { id: "A Đẩu", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/0/06/Liu_Shan_portrait.jpg" },




  // Ngô
  { id: "Tôn Quyền", group: "Ngô", avatar: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Sun_Quan_portrait.jpg", bio: "Người sáng lập Đông Ngô, trị vì lâu dài và ổn định nhất trong Tam Quốc." },
  { id: "Chu Du", group: "Ngô", avatar: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Zhou_Yu_portrait.jpg", bio: "Đô đốc Đông Ngô, có vai trò quyết định trong chiến thắng Xích Bích." },
  { id: "Lỗ Túc", group: "Ngô", avatar: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Lu_Su_portrait.jpg", bio: "Quân sư kế nhiệm Chu Du, đóng vai trò quan trọng trong liên minh Ngô - Thục." },
  { id: "Tôn Sách", group: "Ngô", avatar: "https://upload.wikimedia.org/wikipedia/commons/2/23/Sun_Ce_portrait.jpg", bio: "Anh trai Tôn Quyền, người đặt nền móng cho Đông Ngô." },
  { id: "Lữ Mông", group: "Ngô", avatar: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Lu_Meng_statue.jpg", bio: "Tướng Ngô giỏi chiến lược, nổi danh khi đánh bại Quan Vũ." },
  { id: "Cam Ninh", group: "Ngô", avatar: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Gan_Ning_statue.jpg" },
  { id: "Trương Chiêu", group: "Ngô", avatar: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Zhang_Zhao_portrait.jpg" },
  { id: "Đại Kiều", group: "Ngô", avatar: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Da_Qiao.jpg" },
  { id: "Tiểu Kiều", group: "Ngô", avatar: "https://upload.wikimedia.org/wikipedia/commons/2/23/Xiao_Qiao.jpg" },

  // Ngụy
  { id: "Tào Tháo", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Cao_Cao_portrait.jpg", bio: "Thủ lĩnh Ngụy quốc, nhà chiến lược và chính trị lỗi lạc thời Tam Quốc." },
  { id: "Tuân Úc", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/6/64/Xun_Yu_portrait.jpg", bio: "Mưu sĩ chủ lực của Tào Tháo, có công lớn trong việc xây dựng nền móng Ngụy quốc." },
  { id: "Quách Gia", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Guo_Jia_portrait.jpg", bio: "Quân sư Tào Tháo, nổi tiếng với tài tiên liệu chiến cục." },
  { id: "Tào Phi", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Cao_Pi_portrait.jpg", bio: "Con trai Tào Tháo, lập ra nhà Ngụy và trở thành Ngụy Văn Đế." },
  { id: "Tào Nhân", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Cao_Ren_statue.jpg", bio: "Tướng lĩnh trung thành, có công lớn trong các chiến dịch của Tào Tháo." },
  { id: "Tào Hồng", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Cao_Hong_statue.jpg", bio: "Cận thần và tướng giỏi của Tào Tháo, từng cứu mạng Tào Tháo khi gặp nguy." },
  { id: "Trình Dục", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Cheng_Yu_portrait.jpg" },
  { id: "Hạ Hầu Đôn", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Xiahou_Dun_statue.jpg" },
  { id: "Hạ Hầu Uyên", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/9/92/Xiahou_Yuan_statue.jpg" },
  { id: "Tư Mã Ý", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Sima_Yi_portrait.jpg" },
  { id: "Tào Chân", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Cao_Zhen_portrait.jpg" },

  // Quần hùng
  { id: "Viên Thiệu", group: "Quần hùng", avatar: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Yuan_Shao_statue.jpg", bio: "Lãnh chúa phương Bắc, thất bại tại Quan Độ trước Tào Tháo." },
  { id: "Đổng Trác", group: "Quần hùng", avatar: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Dong_Zhuo_portrait.jpg", bio: "Lộng quyền triều đình, bị liên minh các chư hầu đánh bại." },
  { id: "Lữ Bố", group: "Quần hùng", avatar: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Lu_Bu_statue.jpg", bio: "Võ tướng vô địch, nhưng phản trắc và cuối cùng bị giết bởi Tào Tháo." },
  { id: "Điêu Thuyền", group: "Quần hùng", avatar: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Diao_Chan.jpg", bio: "Một trong Tứ đại mỹ nhân Trung Hoa, đóng vai trò quan trọng trong cái chết của Đổng Trác." },
  { id: "Trần Cung", group: "Quần hùng", avatar: "https://upload.wikimedia.org/wikipedia/commons/0/00/Chen_Gong_portrait.jpg", bio: "Mưu sĩ tài ba, từng giúp Lữ Bố chống lại Tào Tháo." },
  { id: "Viên Thuật", group: "Quần hùng", avatar: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Yuan_Shu_portrait.jpg" },
  { id: "Trương Giác", group: "Quần hùng", avatar: "https://upload.wikimedia.org/wikipedia/commons/0/06/Zhang_Jue_statue.jpg" },
  { id: "Hoàng Cân", group: "Quần hùng", avatar: "https://upload.wikimedia.org/wikipedia/commons/0/00/Yellow_Turban_rebellion.jpg" },
  
  // Trung lập/Khác
  { id: "Hoa Đà", group: "Khác", avatar: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Hua_Tuo_statue.jpg" },
  { id: "Vương Doãn", group: "Khác", avatar: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Wang_Yun_portrait.jpg" },
  { id: "Trương Liêu", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/1/19/Zhang_Liao_statue.jpg" },

  // Giao điểm trận Xích Bích
  { id: "Trận Xích Bích", group: "Trận chiến", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Red_Cliffs_battle_map.jpg/640px-Red_Cliffs_battle_map.jpg", bio: "Trận đánh kinh điển giữa quân Tào và liên minh Tôn - Lưu, quyết định cục diện Tam Quốc." }
];

const links = [
  { source: "Lưu Bị", target: "Quan Vũ", type: "ally" },
  { source: "Lưu Bị", target: "Trương Phi", type: "ally" },
  { source: "Lưu Bị", target: "Gia Cát Lượng", type: "mentor" },
  { source: "Lưu Bị", target: "Triệu Vân", type: "ally" },
  { source: "Gia Cát Lượng", target: "Ngụy Diên", type: "ally" },
  { source: "Gia Cát Lượng", target: "Mã Siêu", type: "ally" },
  { source: "Gia Cát Lượng", target: "Hoàng Trung", type: "ally" },
  { source: "Tôn Quyền", target: "Chu Du", type: "ally" },
  { source: "Tôn Quyền", target: "Lỗ Túc", type: "ally" },
  { source: "Tôn Quyền", target: "Lữ Mông", type: "ally" },
  { source: "Tôn Sách", target: "Tôn Quyền", type: "mentor" },
  { source: "Tào Tháo", target: "Tuân Úc", type: "ally" },
  { source: "Tào Tháo", target: "Quách Gia", type: "ally" },
  { source: "Tào Tháo", target: "Tào Phi", type: "mentor" },
  { source: "Tào Tháo", target: "Tào Nhân", type: "ally" },
  { source: "Tào Tháo", target: "Tào Hồng", type: "ally" },
  { source: "Đổng Trác", target: "Lữ Bố", type: "mentor" },
  { source: "Lữ Bố", target: "Điêu Thuyền", type: "ally" },
  { source: "Lữ Bố", target: "Trần Cung", type: "ally" },
  { source: "Viên Thiệu", target: "Tào Tháo", type: "enemy" },
  { source: "Đổng Trác", target: "Tào Tháo", type: "enemy" },
  { source: "Tào Tháo", target: "Lưu Bị", type: "enemy" },
  { source: "Tào Tháo", target: "Tôn Quyền", type: "enemy" },
  { source: "Chu Du", target: "Gia Cát Lượng", type: "enemy" },
  { source: "Tào Tháo", target: "Lữ Bố", type: "enemy" },
  { source: "Lữ Bố", target: "Tôn Sách", type: "enemy" },
  { source: "Trận Xích Bích", target: "Tào Tháo", type: "battle" },
  { source: "Trận Xích Bích", target: "Tôn Quyền", type: "battle" },
  { source: "Trận Xích Bích", target: "Chu Du", type: "battle" },
  { source: "Trận Xích Bích", target: "Lưu Bị", type: "battle" },
  { source: "Trận Xích Bích", target: "Gia Cát Lượng", type: "battle" },
  // Thục
{ source: "Lưu Bị", target: "Pháp Chính", type: "ally" },
{ source: "Lưu Bị", target: "Bàng Thống", type: "mentor" },
{ source: "Gia Cát Lượng", target: "Hoàng Nguyệt Anh", type: "spouse" },
{ source: "Lưu Bị", target: "A Đẩu", type: "parent" },

// Ngô
{ source: "Tôn Quyền", target: "Cam Ninh", type: "ally" },
{ source: "Tôn Quyền", target: "Trương Chiêu", type: "mentor" },
{ source: "Tôn Sách", target: "Đại Kiều", type: "spouse" },
{ source: "Chu Du", target: "Tiểu Kiều", type: "spouse" },

// Ngụy
{ source: "Tào Tháo", target: "Trình Dục", type: "ally" },
{ source: "Tào Tháo", target: "Hạ Hầu Đôn", type: "relative" },
{ source: "Tào Tháo", target: "Hạ Hầu Uyên", type: "relative" },
{ source: "Tào Tháo", target: "Tư Mã Ý", type: "ally" },
{ source: "Tào Phi", target: "Tư Mã Ý", type: "ally" },
{ source: "Tào Phi", target: "Tào Chân", type: "ally" },
{ source: "Tào Tháo", target: "Trương Liêu", type: "ally" },

// Quần hùng
{ source: "Viên Thuật", target: "Tào Tháo", type: "enemy" },
{ source: "Trương Giác", target: "Hoàng Cân", type: "ally" },
{ source: "Trương Giác", target: "Tào Tháo", type: "enemy" },

// Khác
{ source: "Hoa Đà", target: "Quan Vũ", type: "medical" },
{ source: "Vương Doãn", target: "Điêu Thuyền", type: "mentor" },
{ source: "Vương Doãn", target: "Lữ Bố", type: "manipulate" },
];

if (typeof module !== 'undefined') {
  module.exports = { nodes, links };
}

window.nodes = nodes;
window.links = links;
