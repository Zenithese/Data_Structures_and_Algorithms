# bubble sort -- time: O(n**2) -- space: O(1)

def bubble_sort(array)

    swapped = true

    while (swapped)
        swapped = false
        for i in  (0...array.length - 1)
            if array[i] > array[i + 1] 
                array[i], array[i + 1] = array[i + 1], array[i]
                swapped = true
            end
        end
    end

    return array

end

def selection_sort(array)
    for i in (0...array.length)
        min_idx = i
        for j in (i+1...array.length)
            if array[min_idx] > array[j]
                min_idx = j
            end
        end
        array[min_idx], array[i] = array[i], array[min_idx]
    end

    return array
end

def insertion_sort(arr)
    for i in (1...arr.length)
        curr_el = arr[i]
        for j in (i - 1).downto(-1)
            break if curr_el > arr[j]
            arr[j + 1] = arr[j]
        end
        arr[j + 1] = curr_el
    end
    return arr
end

def merge_sort(array)
    return array if array.length <= 1

    mid = array.length/2
    left = merge_sort(array[0...mid])
    right = merge_sort(array[mid..-1])

    return merge(left, right)
end

def merge(left, right)
    merged = []

    while !left.empty? && !right.empty?
        if left[0] < right[0]
            merged.push(left.shift)
        else
            merged.push(right.shift)
        end
    end

    return merged.concat(left).concat(right)
end

def quicksort(array)
    return array if array.length <= 1

    pivot = array.shift
    left = quicksort(array.select { |num| num < pivot })
    right = quicksort(array.select { |num| pivot <= num })

    return [*left, pivot, *right]
end

p bubble_sort([3,6,3,4,6,3,7,1])
p selection_sort([3,6,3,4,6,3,7,1])
p insertion_sort([3,6,3,4,6,3,7,1])
p merge_sort([3,6,3,4,6,3,7,1])
p quicksort([3,6,3,4,6,3,7,1])