class RecentCounter {

    private Queue<Integer> q;
    
    public RecentCounter() {
        this.q = new LinkedList<>();
    }
    
    public int ping(int t) {
        q.offer(t);
        int range = t -3000;
        while(q.peek() < range){
            q.poll();
        }
        
        return q.size();
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * RecentCounter obj = new RecentCounter();
 * int param_1 = obj.ping(t);
 */