package com.civicvoice.repository;

import com.civicvoice.model.CivicIssue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CivicIssueRepository extends JpaRepository<CivicIssue, Long>, JpaSpecificationExecutor<CivicIssue> {
    List<CivicIssue> findByStatus(String status);
    List<CivicIssue> findByCategory(String category);
    List<CivicIssue> findByCity(String city);
    List<CivicIssue> findByCategoryAndStatus(String category, String status);

    @Query("SELECT COUNT(i) FROM CivicIssue i")
    long countAllIssues();

    @Query("SELECT COUNT(i) FROM CivicIssue i WHERE i.status = 'pending'")
    long countPending();

    @Query("SELECT COUNT(i) FROM CivicIssue i WHERE i.status = 'in_progress'")
    long countInProgress();

    @Query("SELECT COUNT(i) FROM CivicIssue i WHERE i.status = 'resolved'")
    long countResolved();
}
