import java.util.Arrays;

//Design a HashMap without using any built-in hash table libraries.
class MyHashMap {
    int[] map;

    public MyHashMap() {
        map = new int[1000001];
        Arrays.fill(map, -1);
    }

    /**
     * value will always be non-negative.
     */
    public void put(int key, int value) {
        if (value >= 0) {
            map[key] = value;
        }
    }

    /**
     * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
     */
    public int get(int key) {
        return map[key];
    }

    /**
     * Removes the mapping of the specified value key if this map contains a mapping for the key
     */
    public void remove(int key) {
        map[key] = -1;
    }

    public static void main(String[] args) {
        MyHashMap map = new MyHashMap();
        map.put(1, 1);
        map.put(2, 1);
        map.put(3, 5);
        System.out.println(map.get(1));
        map.remove(1);
    }
}
