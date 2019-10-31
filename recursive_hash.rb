$count = 0

def recursive_hash_traversal(hash)
    $count += 1
    hash.each{ |key, value| value.is_a?(Hash) ? recursive_hash_traversal(value) : value }
end

hash = { a: { b: {c: 'd'}}}
recursive_hash_traversal(hash)

puts $count # outputs 3 (the number of hashes included in 'hash')