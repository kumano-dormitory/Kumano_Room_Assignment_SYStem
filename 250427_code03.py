#ブロック名一覧
block_names = ["A1", "A2", "A3", "A4", "B12", "B3", "B4", "C12", "C34"]

#ブロック名を辞書化
shimei_dict = {name: [] for name in block_names}
kakutei_dict = {name: [] for name in block_names}

#全新入寮生のリストを作製
all_member =  []
for i in range(100):
    val = i
    all_member.append(val)
print(f"全新入寮生 =", all_member)

#指名初期化
shimei_dict = {name: [] for name in block_names}

# 枠数を保存する辞書
n枠数 = {}

# 各ブロックの枠数を入力
for name in block_names:
    n枠数[name] = int(input(f"{name}枠数: "))

#各ブロックごとに指名
for name in block_names:
    print(f"{name}指名:")
    i = 0
    while i < n枠数[name]:
        val = int(input(f"{name}[{i}] = "))
        if val in all_member:
            shimei_dict[name].append(val)
            i += 1
        else:
            print(f"その番号は新入寮生にはいません")

# 指名表示
print("\n各ブロック指名:")
for name in block_names:
    print(f"{name}指名:{sorted(shimei_dict[name])}")

# 確定枠確認のため集合化
shimei_sets = {name: set(shimei_dict[name]) for name in block_names}

# 確定枠検索
unique_blocks = {}

for name in block_names:
    other_sets = set()  # 他のブロックの集合をまとめる
    for other_name in block_names:
        if other_name != name:
            other_sets |= shimei_sets[other_name]
    unique_blocks[name] = shimei_sets[name] - other_sets

# 結果表示
print("\n確定枠:")
for name in block_names:
    print(f"{name}:", sorted(list(unique_blocks[name])))

# バッティングリストアップ
all_values = set()
for name in block_names:
    all_values |= shimei_sets[name] 

print("\n指名被り:")
for val in sorted(all_values):
    in_lists = []
    for name in block_names:
        if val in shimei_sets[name]:
            in_lists.append(name)
    if len(in_lists) >= 2:
        print(f"No. {val} は {', '.join(in_lists)} で被り")
        #じゃんけん
        print(f"{val}をかけて{', '.join(in_lists)}でじゃんけん")
        
        candidate = in_lists
        while True:
                winner = input("どこが勝った？:")
                if winner in candidate:
                        break
                else:
                    print("ブロックじゃないです")
    
    print(f"{winner}が{val}を獲得")






    
        



