import Mock from "mockjs";

Mock.mock("/juejin/", "get", {
	code: 0,
	msg: "",
	datas: {
		"total|2000-3000": 0,
		"rows|15": [
			{
				name: "@cname",
				id: "@guid",
				title: "# " + "@ctitle(6,20)",
				subtitle1: "## "+"@ctitle(3,10)",
				subtitle2: "## "+"@ctitle(3,10)",
				subsubtitle1: "### "+"@ctitle(3,10)",
				subsubtitle2: "### "+"@ctitle(3,10)",
				subsubtitle3: "### "+"@ctitle(3,10)",
				subsubsubtitle1: "#### "+"@ctitle(3,10)",
				subsubsubtitle2: "#### " + "@ctitle(3,10)",
				description: "@cparagraph(5,15)",
				description1: "@cparagraph(5,15)",
				description2: "@cparagraph(5,15)",
				description3: "@cparagraph(5,15)",
				description4: "@cparagraph(5,15)",
				code1: "```cpp \n quick_sort(int q[], int l, int r) \n { \n 		if(l >= r) return;//防止越界 \n 		int x = q[l+r>>1], i = l - 1, j = r + 1; \n 		while(i < j) \n 		{ \n 				do i++; while(q[i] < x); //不断移动指针将数组分成两段 \n 				do j--; while(q[j] > x); \n 				if(i < j) swap(q[i], q[j]); \n 		} \n 		 \n 		quick_sort(q, l, j),quick_sort(q, j+1, r);//递归调用 \n } \n ```",
				code2: "```cpp \n bool check(double x) {/* ... */} // 检查x是否满足某种性质 \n double bsearch_3(double l, double r) \n { \n 		const double eps = 1e-6;   // eps 表示精度，取决于题目对精度的要求 \n 		while (r - l > eps) \n 		{ \n 				double mid = (l + r) / 2; \n 				if (check(mid)) r = mid; \n 				else l = mid; \n 		} \n 		return l; \n } \n ```",
				"scanNumber|0-5000": 10,
				"commentNumber|0-1000": 30,
				"like|0-1000": 20,
				"pic|1": [Mock.Random.image("120x80", "#ccc", "#fff", "picture"), null],
				createDate: "@date('T')",
			},
		],
	},
});

Mock.setup({
	timeout: "1000-2000",
});
