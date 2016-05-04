;### Задача поиска пика
;
;Уточним определение: пик — это элемент массива, все соседи которого не больше его. Для вектора — это элемент, у которого есть правый и левый сосед и они не меньше его. Для матрицы это элемент, у которого сосеби справа, слева, снизу и сверху не меньше его. Крайние элементы мы не рассматриваем в качестве кандидатов на пик.
;
;Реализуйте наивный алогритм, который находит хотя бы один пик в одномерном и двухмерном массиве.
;
;Бонус: реализуйте алгоритм, который находит пик в массиве любой размерности.

const naivePeak = (arr) =>
  arr.find((item, i) =>
    (arr[i-1] != undefined) && (arr[i+1] != undefined) && item >= arr[i-1] && item >= arr[i+1]
  )
