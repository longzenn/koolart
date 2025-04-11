// data-full.js
// Danh sách hơn 100 nhân vật Tam Quốc với avatar, nhóm, tiểu sử và mối quan hệ

const nodes = [
  // Thục
  // Thục
  { id: "Lưu Bị", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Liu_Bei_Tang.jpg/250px-Liu_Bei_Tang.jpg", bio: "Hoàng đế khai quốc Thục Hán, nổi tiếng vì nhân nghĩa và tình huynh đệ với Quan Vũ và Trương Phi." },
  { id: "Quan Vũ", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Guanyu-1.jpg/250px-Guanyu-1.jpg", bio: "Danh tướng Thục Hán, được tôn sùng như Võ Thánh, là anh em kết nghĩa với Lưu Bị." },
  { id: "Trương Phi", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/ZhangFei.jpg/250px-ZhangFei.jpg", bio: "Một trong ba anh em kết nghĩa Lưu Quan Trương, nổi tiếng vì tính khí nóng nảy nhưng trung nghĩa." },
  { id: "Gia Cát Lượng", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/%E8%9C%80%E6%B1%89%E4%B8%9E%E7%9B%B8%E5%BF%A0%E6%AD%A6%E4%BE%AF%E8%AF%B8%E8%91%9B%E4%BA%AE.jpg/250px-%E8%9C%80%E6%B1%89%E4%B8%9E%E7%9B%B8%E5%BF%A0%E6%AD%A6%E4%BE%AF%E8%AF%B8%E8%91%9B%E4%BA%AE.jpg", bio: "Khổng Minh, thừa tướng Thục Hán, nhà chiến lược và quân sư thiên tài thời Tam Quốc." },
  { id: "Triệu Vân", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/b/be/Zhao_Yun_statue.jpg", bio: "Dũng tướng Thục Hán, nổi tiếng qua trận cứu A Đẩu tại Trường Bản." },
  { id: "Ngụy Diên", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/6/67/Wei_Yan_statue.jpg", bio: "Danh tướng Thục Hán, lập nhiều chiến công nhưng bị nghi kỵ và kết cục bi thảm." },
  { id: "Mã Siêu", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Ma_Chao_statue.jpg", bio: "Một trong Ngũ hổ tướng, từng chống Tào Tháo trước khi theo Lưu Bị." },
  { id: "Hoàng Trung", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Huang_Zhong_statue.jpg", bio: "Lão tướng Thục Hán, lừng danh với chiến công tại Định Quân Sơn." },
  { id: "Pháp Chính", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/FaZheng.jpg/250px-FaZheng.jpg", bio: "Khi Lưu Bị vào đất Thục, Pháp Chính về làm mưu thần cho Lưu Bị, được Bị rất tín nhiệm và kính trọng." },
  { id: "Bàng Thống", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Pang_Tong_portrait.jpg", bio: "Phượng Sồ, mưu sĩ tài năng của Lưu Bị, tử trận tại Lạc Phượng." },
  { id: "Hoàng Nguyệt Anh", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/7/74/Huang_Yueying.jpg", bio: "Vợ của Gia Cát Lượng, nổi tiếng thông minh và tài giỏi." },
  { id: "A Đẩu", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/0/06/Liu_Shan_portrait.jpg", bio: "Lưu Thiện, con trai Lưu Bị, hoàng đế thứ hai của Thục Hán." },
  { id: "Mã Đại", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Ma_Dai_statue.jpg", bio: "Cháu trai Mã Siêu, từng tham gia Bắc phạt cùng Gia Cát Lượng và giết Ngụy Diên." },
  { id: "Quan Bình", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Guan_Ping_statue.jpg", bio: "Nghĩa tử Quan Vũ, tử trận cùng cha tại Mã Thành." },
  { id: "Quan Hưng", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/3/38/Guan_Xing_statue.jpg", bio: "Con trai Quan Vũ, kế thừa chức vụ cha." },
  { id: "Trương Bào", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Zhang_Bao_statue.jpg", bio: "Con trai Trương Phi, tiếp nối sự nghiệp cha." },
  { id: "Khương Duy", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Jiang_Wei_statue.jpg", bio: "Đệ tử Gia Cát Lượng, lãnh đạo cuộc Bắc phạt cuối cùng." },
  { id: "Từ Thứ", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Xu_Shu_portrait.jpg", bio: "Mưu sĩ đầu tiên của Lưu Bị, tiến cử Khổng Minh rồi về với Tào Tháo." },
  { id: "Mã Lương", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/9/94/Ma_Liang_portrait.jpg", bio: "Anh trai Mã Tốc, tham mưu của Lưu Bị." },
  { id: "Mã Tốc", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Ma_Su_portrait.jpg", bio: "Tướng Thục bị Gia Cát Lượng xử trảm vì thất thủ Nhai Đình." },
  { id: "Phí Y", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Fei_Yi_portrait.jpg", bio: "Đại thần kế nhiệm Tưởng Uyển, chủ trì triều chính." },
  { id: "Đổng Hòa", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Dong_He_portrait.jpg", bio: "Quan lại thanh liêm thời Lưu Bị." },
  { id: "Tưởng Uyển", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Jiang_Wan_portrait.jpg/250px-Jiang_Wan_portrait.jpg", bio: "Thừa tướng Thục Hán sau Gia Cát Lượng." },
  { id: "Lý Nghiêm", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Li_Yan_portrait.jpg/250px-Li_Yan_portrait.jpg", bio: "Đồng sự của Gia Cát Lượng, sau bị phế truất." },
  { id: "Lưu Phong", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Liu_Feng_portrait.jpg/250px-Liu_Feng_portrait.jpg", bio: "Con nuôi Lưu Bị, không cứu viện Quan Vũ và bị xử tử." },
  { id: "Mi Chúc", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Mi_Zhu_portrait.jpg/250px-Mi_Zhu_portrait.jpg", bio: "Anh trai Mi Phương, ủng hộ Lưu Bị từ sớm." },
  { id: "Mi Phương", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Mi_Fang_portrait.jpg/250px-Mi_Fang_portrait.jpg", bio: "Em trai Mi Chúc, sau phản bội Lưu Bị." },
  { id: "Chu Thương", group: "Thục", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/GuanYu-ZhouCang.jpg/200px-GuanYu-ZhouCang.jpg", bio: "Chu Thương là một nhân vật hư cấu trong tác phẩm Tam quốc diễn nghĩa. Chu Thương rất ngưỡng mộ Quan Vũ, cam nguyện vứt bỏ tất cả để đi theo." },

  // Ngô
  { id: "Tôn Quyền", group: "Ngô", avatar: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Sun_Quan_portrait.jpg", bio: "Người sáng lập Đông Ngô, trị vì lâu dài và ổn định nhất trong Tam Quốc." },
  { id: "Chu Du", group: "Ngô", avatar: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Zhou_Yu_portrait.jpg", bio: "Đô đốc Đông Ngô, có vai trò quyết định trong chiến thắng Xích Bích." },
  { id: "Lỗ Túc", group: "Ngô", avatar: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Lu_Su_portrait.jpg", bio: "Quân sư kế nhiệm Chu Du, đóng vai trò quan trọng trong liên minh Ngô - Thục." },
  { id: "Tôn Sách", group: "Ngô", avatar: "https://upload.wikimedia.org/wikipedia/commons/2/23/Sun_Ce_portrait.jpg", bio: "Anh trai Tôn Quyền, người đặt nền móng cho Đông Ngô." },
  { id: "Lữ Mông", group: "Ngô", avatar: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Lu_Meng_statue.jpg", bio: "Tướng Ngô giỏi chiến lược, nổi danh khi đánh bại Quan Vũ." },
  { id: "Cam Ninh", group: "Ngô", avatar: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Gan_Ning_statue.jpg", bio: "Dũng tướng Đông Ngô, nổi tiếng với các trận thủy chiến." },
  { id: "Trương Chiêu", group: "Ngô", avatar: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Zhang_Zhao_portrait.jpg", bio: "Mưu sĩ trụ cột của Đông Ngô, nổi tiếng với sự thận trọng." },
  { id: "Đại Kiều", group: "Ngô", avatar: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Da_Qiao.jpg", bio: "Vợ của Tôn Sách, một trong Nhị Kiều xinh đẹp." },
  { id: "Tiểu Kiều", group: "Ngô", avatar: "https://upload.wikimedia.org/wikipedia/commons/2/23/Xiao_Qiao.jpg", bio: "Vợ của Chu Du, em gái Đại Kiều." },
  { id: "Lục Tốn", group: "Ngô", avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Lu_Xun_portrait.jpg", bio: "Đại đô đốc Đông Ngô, chiến thắng trận Di Lăng." },
  { id: "Tôn Kiên", group: "Ngô", avatar: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Sun_Jian_portrait.jpg", bio: "Cha Tôn Sách - Tôn Quyền, khởi nghiệp nhà Đông Ngô." },
  { id: "Tôn Thượng Hương", group: "Ngô", avatar: "https://upload.wikimedia.org/wikipedia/commons/6/69/Sun_Shangxiang.jpg", bio: "Em gái Tôn Quyền, kết hôn với Lưu Bị vì mục đích chính trị." },
  { id: "Trình Phổ", group: "Ngô", avatar: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Cheng_Pu_statue.jpg", bio: "Lão tướng tam triều, tham gia trận Xích Bích." },
  { id: "Chu Thái", group: "Ngô", avatar: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Zhou_Tai_portrait.jpg", bio: "Dũng tướng cứu Tôn Quyền nhiều lần." },
  { id: "Từ Thịnh", group: "Ngô", avatar: "https://upload.wikimedia.org/wikipedia/commons/6/60/Xu_Sheng_statue.jpg", bio: "Danh tướng phòng thủ biên cương." },
  { id: "Đinh Phụng", group: "Ngô", avatar: "https://upload.wikimedia.org/wikipedia/commons/8/83/Ding_Feng_statue.jpg", bio: "Tướng lĩnh nổi tiếng qua các đời chúa Ngô." },
  { id: "Hoàng Cái", group: "Ngô", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Huang_Gai_statue.jpg/250px-Huang_Gai_statue.jpg", bio: "Lão tướng Ngô, dùng khổ nhục kế trong trận Xích Bích." },
  { id: "Hàn Đương", group: "Ngô", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Han_Dang_statue.jpg/250px-Han_Dang_statue.jpg", bio: "Tướng lĩnh kỳ cựu của Đông Ngô." },
  { id: "Tưởng Khâm", group: "Ngô", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Jiang_Qin_statue.jpg/250px-Jiang_Qin_statue.jpg", bio: "Tướng lĩnh thủy quân của Đông Ngô." },
  { id: "Phan Chương", group: "Ngô", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Pan_Zhang_statue.jpg/250px-Pan_Zhang_statue.jpg", bio: "Tướng Ngô bắt được Quan Vũ." },
  { id: "Bộ Chất", group: "Ngô", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bu_Zhi_portrait.jpg/250px-Bu_Zhi_portrait.jpg", bio: "Quan lại và tướng lĩnh Đông Ngô." },

  // Ngụy
  { id: "Tào Tháo", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Cao_Cao_portrait.jpg", bio: "Thủ lĩnh Ngụy quốc, nhà chiến lược và chính trị lỗi lạc thời Tam Quốc." },
  { id: "Tuân Úc", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/6/64/Xun_Yu_portrait.jpg", bio: "Mưu sĩ chủ lực của Tào Tháo, có công lớn trong việc xây dựng nền móng Ngụy quốc." },
  { id: "Quách Gia", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Guo_Jia_portrait.jpg", bio: "Quân sư Tào Tháo, nổi tiếng với tài tiên liệu chiến cục." },
  { id: "Tào Phi", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Cao_Pi_portrait.jpg", bio: "Con trai Tào Tháo, lập ra nhà Ngụy và trở thành Ngụy Văn Đế." },
  { id: "Tào Nhân", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Cao_Ren_statue.jpg", bio: "Tướng lĩnh trung thành, có công lớn trong các chiến dịch của Tào Tháo." },
  { id: "Tào Hồng", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Cao_Hong_statue.jpg", bio: "Cận thần và tướng giỏi của Tào Tháo, từng cứu mạng Tào Tháo khi gặp nguy." },
  { id: "Trình Dục", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Cheng_Yu_portrait.jpg", bio: "Mưu sĩ của Tào Tháo, nổi tiếng với mưu kế hiểm độc." },
  { id: "Hạ Hầu Đôn", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Xiahou_Dun_statue.jpg", bio: "Tướng lĩnh trụ cột của Tào Ngụy, bị mù một mắt." },
  { id: "Hạ Hầu Uyên", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/9/92/Xiahou_Yuan_statue.jpg", bio: "Tướng lĩnh tài năng của Tào Ngụy, tử trận tại Định Quân Sơn." },
  { id: "Tư Mã Ý", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Sima_Yi_portrait.jpg", bio: "Nhà chiến lược và chính trị gia tài ba, đặt nền móng cho nhà Tấn." },
  { id: "Tào Chân", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Cao_Zhen_portrait.jpg", bio: "Tướng lĩnh quan trọng của Tào Ngụy." },
  { id: "Hứa Chử", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Xu_Chu_statue.jpg", bio: "Dũng tướng thân cận Tào Tháo, biệt danh 'Hổ Si'." },
  { id: "Trương Cáp", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/4/44/Zhang_He_statue.jpg", bio: "Danh tướng kỳ cựu qua 4 đời chúa Ngụy." },
  { id: "Tư Mã Sư", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/3/38/Sima_Shi_portrait.jpg", bio: "Con trưởng Tư Mã Ý, mở đường cho nhà Tấn." },
  { id: "Tư Mã Chiêu", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Sima_Zhao_portrait.jpg", bio: "Con thứ Tư Mã Ý, cha của Tư Mã Viêm (Tấn Vũ Đế)." },
  { id: "Đặng Ngải", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/4/45/Deng_Ai_statue.jpg", bio: "Danh tướng có công diệt Thục Hán." },
  { id: "Hạ Hầu Bá", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/3/39/Xiahou_Ba_portrait.jpg", bio: "Con Hạ Hầu Uyên, sau đầu hàng Thục Hán." },
  { id: "Vương Lãng", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Wang_Lang_portrait.jpg/250px-Wang_Lang_portrait.jpg", bio: "Quan lại nhà Hán và Ngụy, nổi tiếng với cuộc tranh luận với Gia Cát Lượng." },
  { id: "Giả Hủ", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Jia_Xu_portrait.jpg/250px-Jia_Xu_portrait.jpg", bio: "Mưu sĩ tài ba, phục vụ nhiều thế lực trước khi theo Tào Tháo." },
  { id: "Man Sủng", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Man_Chong_portrait.jpg/250px-Man_Chong_portrait.jpg", bio: "Tướng lĩnh và quan lại của Tào Ngụy." },
  { id: "Văn Sính", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Wen_Pin_portrait.jpg/250px-Wen_Pin_portrait.jpg", bio: "Tướng lĩnh phục vụ Lưu Biểu trước khi đầu hàng Tào Tháo." },
  { id: "Quách Hoài", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Guo_Huai_portrait.jpg/250px-Guo_Huai_portrait.jpg", bio: "Tướng lĩnh quan trọng của Tào Ngụy, phòng thủ phía tây." },

  // Quần hùng
  { id: "Viên Thiệu", group: "Quần hùng", avatar: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Yuan_Shao_statue.jpg", bio: "Lãnh chúa phương Bắc, thất bại tại Quan Độ trước Tào Tháo." },
  { id: "Đổng Trác", group: "Quần hùng", avatar: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Dong_Zhuo_portrait.jpg", bio: "Lộng quyền triều đình, bị liên minh các chư hầu đánh bại." },
  { id: "Lữ Bố", group: "Quần hùng", avatar: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Lu_Bu_statue.jpg", bio: "Võ tướng vô địch, nhưng phản trắc và cuối cùng bị giết bởi Tào Tháo." },
  { id: "Điêu Thuyền", group: "Quần hùng", avatar: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Diao_Chan.jpg", bio: "Một trong Tứ đại mỹ nhân Trung Hoa, đóng vai trò quan trọng trong cái chết của Đổng Trác." },
  { id: "Trần Cung", group: "Quần hùng", avatar: "https://upload.wikimedia.org/wikipedia/commons/0/00/Chen_Gong_portrait.jpg", bio: "Mưu sĩ tài ba, từng giúp Lữ Bố chống lại Tào Tháo." },
  { id: "Viên Thuật", group: "Quần hùng", avatar: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Yuan_Shu_portrait.jpg", bio: "Lãnh chúa tự xưng đế, bị các thế lực khác tiêu diệt." },
  { id: "Trương Giác", group: "Quần hùng", avatar: "https://upload.wikimedia.org/wikipedia/commons/0/06/Zhang_Jue_statue.jpg", bio: "Lãnh đạo cuộc khởi nghĩa khăn vàng." },
  { id: "Hoàng Cân", group: "Quần hùng", avatar: "https://upload.wikimedia.org/wikipedia/commons/0/00/Yellow_Turban_rebellion.jpg", bio: "Quân đội khởi nghĩa khăn vàng." },
  { id: "Hoa Hùng", group: "Quần hùng", avatar: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Hua_Xiong_statue.jpg", bio: "Tướng Đổng Trác bị Quan Vũ chém." },
  { id: "Nhan Lương", group: "Quần hùng", avatar: "https://upload.wikimedia.org/wikipedia/commons/1/16/Yan_Liang_statue.jpg", bio: "Tướng Viên Thiệu bị Quan Vũ đánh bại." },
  { id: "Văn Xú", group: "Quần hùng", avatar: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Wen_Chou_statue.jpg", bio: "Tướng Viên Thiệu bị Quan Vũ giết." },
  { id: "Hứa Du", group: "Quần hùng", avatar: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Xu_You_portrait.jpg", bio: "Mưu sĩ phản Viên Thiệu theo Tào Tháo." },
  { id: "Trương Lỗ", group: "Quần hùng", avatar: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Zhang_Lu_portrait.jpg", bio: "Thủ lĩnh Ngũ Đấu Mễ Đạo, cát cứ ở Hán Trung." },
  { id: "Mạnh Hoạch", group: "Quần hùng", avatar: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Meng_Huo_statue.jpg", bio: "Thủ lĩnh Nam Man bị Khổng Minh bảy lần bắt và thả." },
  { id: "Chúc Dung", group: "Quần hùng", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Zhu_Rong_statue.jpg/250px-Zhu_Rong_statue.jpg", bio: "Vợ của Mạnh Hoạch, nữ tướng dũng mãnh của Nam Man." },
  { id: "Công Tôn Toản", group: "Quần hùng", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Gongsun_Zan_portrait.jpg/250px-Gongsun_Zan_portrait.jpg", bio: "Lãnh chúa ở U Châu, từng giao chiến với Viên Thiệu." },
  { id: "Đào Khiêm", group: "Quần hùng", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Tao_Qian_portrait.jpg/250px-Tao_Qian_portrait.jpg", bio: "Thứ sử Từ Châu, nhường Từ Châu cho Lưu Bị." },
  { id: "Lưu Biểu", group: "Quần hùng", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Liu_Biao_portrait.jpg/250px-Liu_Biao_portrait.jpg", bio: "Mục Kinh Châu, cai trị Kinh Châu trước khi qua đời." },
  { id: "Lưu Chương", group: "Quần hùng", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Liu_Zhang_portrait.jpg/250px-Liu_Zhang_portrait.jpg", bio: "Con trai Lưu Yên, Mục Ích Châu, bị Lưu Bị chiếm Ích Châu." },
  { id: "Trương Tú", group: "Quần hùng", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Zhang_Xiu_portrait.jpg/250px-Zhang_Xiu_portrait.jpg", bio: "Lãnh chúa ở Uyển Thành, từng giao chiến với Tào Tháo." },
  { id: "Sái Mạo", group: "Quần hùng", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Cai_Mao_portrait.jpg/250px-Cai_Mao_portrait.jpg", bio: "Tướng lĩnh Kinh Châu, sau đầu hàng Tào Tháo." },

  // Trung lập/Khác
  { id: "Hoa Đà", group: "Khác", avatar: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Hua_Tuo_statue.jpg", bio: "Thần y nổi tiếng thời Tam Quốc." },
  { id: "Vương Doãn", group: "Khác", avatar: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Wang_Yun_portrait.jpg", bio: "Quan Tư đồ nhà Hán, dùng Điêu Thuyền để ly gián Đổng Trác và Lữ Bố." },
  { id: "Trương Liêu", group: "Ngụy", avatar: "https://upload.wikimedia.org/wikipedia/commons/1/19/Zhang_Liao_statue.jpg", bio: "Danh tướng Tào Ngụy, nổi tiếng với trận Hợp Phì." },
  { id: "Tả Từ", group: "Khác", avatar: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Zuo_Ci_portrait.jpg", bio: "Đạo sĩ tiên tri nổi tiếng thời Tam Quốc." },
  { id: "Vu Cát", group: "Khác", avatar: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Yu_Ji_portrait.jpg", bio: "Đạo sĩ bị Tôn Sách xử tử." },
  { id: "Thái Văn Cơ", group: "Khác", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Cai_Wenji_portrait.jpg/250px-Cai_Wenji_portrait.jpg", bio: "Nữ sĩ tài năng, con gái Thái Ung, bị Hung Nô bắt cóc rồi được Tào Tháo chuộc về." },
  { id: "Khổng Dung", group: "Khác", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Kong_Rong_portrait.jpg/250px-Kong_Rong_portrait.jpg", bio: "Nhà Nho nổi tiếng, hậu duệ Khổng Tử, bị Tào Tháo giết." },
  { id: "Mê Hành", group: "Khác", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Mi_Heng_portrait.jpg/250px-Mi_Heng_portrait.jpg", bio: "Nhà Nho tài năng nhưng ngông cuồng, bị Hoàng Tổ giết." },

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
  { source: "Tôn Sách", target: "Tôn Quyền", type: "sibling" },
  { source: "Tào Tháo", target: "Tuân Úc", type: "ally" },
  { source: "Tào Tháo", target: "Quách Gia", type: "ally" },
  { source: "Tào Tháo", target: "Tào Phi", type: "parent" },
  { source: "Tào Tháo", target: "Tào Nhân", type: "relative" },
  { source: "Tào Tháo", target: "Tào Hồng", type: "relative" },
  { source: "Đổng Trác", target: "Lữ Bố", type: "mentor" },
  { source: "Lữ Bố", target: "Điêu Thuyền", type: "spouse" },
  { source: "Lữ Bố", target: "Trần Cung", type: "ally" },
  { source: "Viên Thiệu", target: "Tào Tháo", type: "enemy" },
  { source: "Đổng Trác", target: "Tào Tháo", type: "enemy" },
  { source: "Tào Tháo", target: "Lưu Bị", type: "enemy" },
  { source: "Tào Tháo", target: "Tôn Quyền", type: "enemy" },
  { source: "Chu Du", target: "Gia Cát Lượng", type: "enemy" },
  { source: "Tào Tháo", target: "Lữ Bố", type: "enemy" },
  { source: "Lữ Bố", target: "Tôn Sách", type: "enemy" },
  { source: "Trận Xích Bích", target: "Tào Tháo", type: "interact" },
  { source: "Trận Xích Bích", target: "Tôn Quyền", type: "interact" },
  { source: "Trận Xích Bích", target: "Chu Du", type: "interact" },
  { source: "Trận Xích Bích", target: "Lưu Bị", type: "interact" },
  { source: "Trận Xích Bích", target: "Gia Cát Lượng", type: "interact" },
  { source: "Quan Vũ", target: "Quan Bình", type: "adopted" },
  { source: "Quan Vũ", target: "Quan Hưng", type: "parent" },
  { source: "Trương Phi", target: "Trương Bào", type: "parent" },
  { source: "Gia Cát Lượng", target: "Khương Duy", type: "mentor" },
  { source: "Từ Thứ", target: "Gia Cát Lượng", type: "recommend" },
  { source: "Mã Siêu", target: "Mã Đại", type: "relative" },

  // Thục
  { source: "Lưu Bị", target: "Pháp Chính", type: "ally" },
  { source: "Lưu Bị", target: "Bàng Thống", type: "mentor" },
  { source: "Gia Cát Lượng", target: "Hoàng Nguyệt Anh", type: "spouse" },
  { source: "Lưu Bị", target: "A Đẩu", type: "parent" },
  { source: "Gia Cát Lượng", target: "Tưởng Uyển", type: "successor" },
  { source: "Gia Cát Lượng", target: "Lý Nghiêm", type: "ally" }, // Coi như đồng sự là ally
  { source: "Lưu Bị", target: "Lưu Phong", type: "adopted" },
  { source: "Lưu Bị", target: "Mi Chúc", type: "ally" }, // Ủng hộ coi như ally
  { source: "Lưu Bị", target: "Mi Phương", type: "ally" }, // Ủng hộ coi như ally
  { source: "Quan Vũ", target: "Chu Thương", type: "ally" }, // Tùy tướng coi như ally
  { source: "Trương Phi", target: "Lưu Bị", type: "ally" },
  { source: "Triệu Vân", target: "Lưu Bị", type: "ally" },
  { source: "Mã Siêu", target: "Lưu Bị", type: "ally" }, // Quy hàng coi như ally
  { source: "Hoàng Trung", target: "Lưu Bị", type: "ally" }, // Quy hàng coi như ally
  { source: "Pháp Chính", target: "Lưu Bị", type: "ally" }, // Tín nhiệm coi như ally
  { source: "Bàng Thống", target: "Lưu Bị", type: "mentor" }, // Tư vấn coi như mentor
  { source: "Khương Duy", target: "Gia Cát Lượng", type: "successor" }, // Học trò coi như successor
  { source: "Mã Tốc", target: "Gia Cát Lượng", type: "ally" }, // Tin dùng coi như ally
  { source: "Lưu Bị", target: "Từ Thứ", type: "mentor" }, // Mưu sĩ ban đầu coi như mentor
  { source: "Mã Lương", target: "Lưu Bị", type: "ally" }, // Tham mưu coi như ally
  { source: "Phí Y", target: "Gia Cát Lượng", type: "ally" }, // Ủng hộ coi như ally
  { source: "Đổng Hòa", target: "Lưu Bị", type: "ally" }, // Quan lại coi như ally
  { source: "Tưởng Uyển", target: "Phí Y", type: "successor" },
  { source: "Lý Nghiêm", target: "Gia Cát Lượng", type: "enemy" }, // Bất hòa coi như enemy
  { source: "Lưu Phong", target: "Quan Vũ", type: "enemy" }, // Không cứu viện coi như enemy
  { source: "Mi Chúc", target: "Lưu Bị", type: "ally" }, // Hỗ trợ tài chính coi như ally
  { source: "Mi Phương", target: "Phan Chương", type: "enemy" }, // Bắt giữ coi như enemy

  // Ngô
  { source: "Tôn Quyền", target: "Cam Ninh", type: "ally" },
  { source: "Tôn Quyền", target: "Trương Chiêu", type: "mentor" }, // Khuyên răn coi như mentor
  { source: "Tôn Sách", target: "Đại Kiều", type: "spouse" },
  { source: "Chu Du", target: "Tiểu Kiều", type: "spouse" },
  { source: "Tôn Kiên", target: "Tôn Sách", type: "parent" },
  { source: "Tôn Quyền", target: "Tôn Thượng Hương", type: "sibling" },
  { source: "Lục Tốn", target: "Lữ Mông", type: "successor" },
  { source: "Tôn Quyền", target: "Trình Phổ", type: "ally" }, // Lão tướng coi như ally
  { source: "Tôn Quyền", target: "Chu Thái", type: "ally" }, // Cứu mạng coi như ally
  { source: "Tôn Quyền", target: "Từ Thịnh", type: "ally" }, // Tướng lĩnh coi như ally
  { source: "Tôn Quyền", target: "Đinh Phụng", type: "ally" }, // Tướng lĩnh coi như ally
  { source: "Chu Du", target: "Tôn Quyền", type: "ally" }, // Phục vụ coi như ally
  { source: "Lỗ Túc", target: "Tôn Quyền", type: "ally" }, // Trung thành coi như ally
  { source: "Lữ Mông", target: "Tôn Quyền", type: "ally" }, // Phục vụ coi như ally
  { source: "Cam Ninh", target: "Tôn Quyền", type: "ally" }, // Dũng tướng coi như ally
  { source: "Trương Chiêu", target: "Tôn Quyền", type: "mentor" }, // Khuyên răn coi như mentor
  { source: "Lục Tốn", target: "Tôn Quyền", type: "ally" }, // Đô đốc coi như ally
  { source: "Tôn Thượng Hương", target: "Lưu Bị", type: "spouse" }, // Hôn nhân chính trị coi như spouse
  { source: "Hoàng Cái", target: "Chu Du", type: "ally" }, // Phối hợp coi như ally
  { source: "Hàn Đương", target: "Tôn Quyền", type: "ally" }, // Phục vụ lâu năm coi như ally
  { source: "Tưởng Khâm", target: "Chu Du", type: "ally" }, // Đồng liêu coi như ally
  { source: "Phan Chương", target: "Lữ Mông", type: "ally" }, // Cấp dưới coi như ally
  { source: "Bộ Chất", target: "Tôn Quyền", type: "ally" }, // Quan lại coi như ally

  // Ngụy
  { source: "Tào Tháo", target: "Trình Dục", type: "mentor" },
  { source: "Tào Tháo", target: "Hạ Hầu Đôn", type: "relative" },
  { source: "Tào Tháo", target: "Hạ Hầu Uyên", type: "relative" },
  { source: "Tào Tháo", target: "Tư Mã Ý", type: "ally" }, // Quân sư (cảnh giác) coi như ally
  { source: "Tào Phi", target: "Tư Mã Ý", type: "ally" },
  { source: "Tào Phi", target: "Tào Chân", type: "relative" },
  { source: "Tào Tháo", target: "Trương Liêu", type: "ally" },
  { source: "Tư Mã Ý", target: "Tư Mã Sư", type: "parent" },
  { source: "Tư Mã Ý", target: "Tư Mã Chiêu", type: "parent" },
  { source: "Đặng Ngải", target: "Khương Duy", type: "enemy" },
  { source: "Tào Tháo", target: "Hứa Chử", type: "ally" }, // Vệ sĩ coi như ally
  { source: "Tào Tháo", target: "Trương Cáp", type: "ally" }, // Quy hàng coi như ally
  { source: "Tuân Úc", target: "Tào Tháo", type: "ally" }, // Mưu sĩ trung thành coi như ally
  { source: "Quách Gia", target: "Tào Tháo", type: "ally" }, // Mưu sĩ tài năng coi như ally
  { source: "Tào Nhân", target: "Tào Tháo", type: "relative" }, // Tướng thân tín coi như relative
  { source: "Tào Hồng", target: "Tào Tháo", type: "relative" }, // Cứu mạng coi như relative
  { source: "Trình Dục", target: "Tào Tháo", type: "mentor" }, // Hiến kế coi như mentor
  { source: "Hạ Hầu Đôn", target: "Tào Tháo", type: "relative" }, // Tướng trụ cột coi như relative
  { source: "Hạ Hầu Uyên", target: "Tào Tháo", type: "relative" }, // Tướng tiên phong coi như relative
  { source: "Tào Chân", target: "Tào Phi", type: "ally" }, // Phục vụ coi như ally
  { source: "Hứa Chử", target: "Tào Tháo", type: "ally" }, // Bảo vệ coi như ally
  { source: "Trương Cáp", target: "Tào Tháo", type: "ally" }, // Quy hàng coi như ally
  { source: "Tư Mã Sư", target: "Tư Mã Ý", type: "successor" }, // Người kế thừa coi như successor
  { source: "Tư Mã Chiêu", target: "Tư Mã Ý", type: "successor" }, // Củng cố quyền lực coi như successor
  { source: "Vương Lãng", target: "Tào Tháo", type: "ally" }, // Phục vụ coi như ally
  { source: "Giả Hủ", target: "Tào Tháo", type: "mentor" }, // Mưu sĩ coi như mentor
  { source: "Man Sủng", target: "Tào Tháo", type: "ally" }, // Tướng lĩnh coi như ally
  { source: "Văn Sính", target: "Tào Tháo", type: "ally" }, // Quy hàng coi như ally
  { source: "Quách Hoài", target: "Tào Tháo", type: "ally" }, // Tướng phòng thủ coi như ally

  // Quần hùng
  { source: "Viên Thuật", target: "Tào Tháo", type: "enemy" },
  { source: "Trương Giác", target: "Hoàng Cân", type: "ally" }, // Lãnh đạo - quân đội coi như ally
  { source: "Trương Giác", target: "Tào Tháo", type: "enemy" },
  { source: "Hoa Hùng", target: "Quan Vũ", type: "enemy" }, // Bị giết coi như enemy
  { source: "Nhan Lương", target: "Quan Vũ", type: "enemy" }, // Bị giết coi như enemy
  { source: "Viên Thiệu", target: "Nhan Lương", type: "ally" }, // Tướng dưới quyền coi như ally
  { source: "Mạnh Hoạch", target: "Gia Cát Lượng", type: "enemy" }, // Bị khuất phục coi như enemy
  { source: "Chúc Dung", target: "Mạnh Hoạch", type: "spouse" },
  { source: "Công Tôn Toản", target: "Viên Thiệu", type: "enemy" }, // Đối địch coi như enemy
  { source: "Đào Khiêm", target: "Lưu Bị", type: "ally" }, // Nhường đất coi như ally
  { source: "Lưu Biểu", target: "Lưu Bị", type: "ally" }, // Cưu mang coi như ally
  { source: "Lưu Chương", target: "Lưu Bị", type: "enemy" }, // Bị đánh bại coi như enemy
  { source: "Trương Tú", target: "Tào Tháo", type: "ally" }, // Từng đối địch, sau hàng coi như ally
  { source: "Sái Mạo", target: "Lưu Biểu", type: "ally" }, // Tướng dưới quyền coi như ally
  { source: "Sái Mạo", target: "Tào Tháo", type: "ally" }, // Đầu hàng coi như ally
  { source: "Viên Thiệu", target: "Công Tôn Toản", type: "enemy" }, // Đối địch coi như enemy
  { source: "Viên Thiệu", target: "Viên Thuật", type: "relative" }, // Anh em (bất hòa) coi như relative
  { source: "Đổng Trác", target: "Lữ Bố", type: "manipulate" }, // Lợi dụng
  { source: "Lữ Bố", target: "Đổng Trác", type: "enemy" }, // Phản bội coi như enemy
  { source: "Điêu Thuyền", target: "Đổng Trác", type: "manipulate" }, // Bị lợi dụng
  { source: "Điêu Thuyền", target: "Lữ Bố", type: "spouse" },
  { source: "Trần Cung", target: "Tào Tháo", type: "enemy" }, // Từng phục vụ, sau phản coi như enemy
  { source: "Trương Lỗ", target: "Tào Tháo", type: "ally" }, // Bị đánh bại, sau hàng coi như ally
  { source: "Mạnh Hoạch", target: "Chúc Dung", type: "spouse" },

  // Khác
  { source: "Hoa Đà", target: "Quan Vũ", type: "medical" },
  { source: "Vương Doãn", target: "Điêu Thuyền", type: "manipulate" }, // Dùng kế
  { source: "Vương Doãn", target: "Đổng Trác", type: "enemy" },
  { source: "Vương Doãn", target: "Lữ Bố", type: "manipulate" }, // Lợi dụng
  { source: "Trương Liêu", target: "Lữ Bố", type: "ally" }, // Từng phục vụ coi như ally
  { source: "Trương Liêu", target: "Tào Tháo", type: "ally" }, // Phục vụ
  { source: "Tả Từ", target: "Tào Tháo", type: "interact" }, // Trêu chọc
  { source: "Vu Cát", target: "Tôn Sách", type: "enemy" }, // Bị giết
  { source: "Thái Văn Cơ", target: "Tào Tháo", type: "ally" }, // Chuộc về coi như ally
  { source: "Thái Văn Cơ", target: "Đổng Trác", type: "spouse" }, // Vợ chồng cũ
  { source: "Khổng Dung", target: "Tào Tháo", type: "enemy" }, // Bất đồng quan điểm, bị giết
  { source: "Mê Hành", target: "Hoàng Tổ", type: "enemy" }, // Bị giết
  { source: "Mê Hành", target: "Lưu Biểu", type: "ally" }, // Từng phục vụ

  // Giao điểm trận Xích Bích
  { source: "Trận Xích Bích", target: "Chu Du", type: "battle" }, // Chỉ huy
  { source: "Trận Xích Bích", target: "Gia Cát Lượng", type: "battle" }, // Tham gia liên minh
  { source: "Trận Xích Bích", target: "Hoàng Cái", type: "battle" } // Khổ nhục kế
];

if (typeof module !== 'undefined') {
  module.exports = { nodes, links };
}

window.nodes = nodes;
window.links = links;
