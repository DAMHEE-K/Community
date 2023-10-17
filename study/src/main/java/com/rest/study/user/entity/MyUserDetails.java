package com.rest.study.user.entity;

import lombok.Builder;
import lombok.Data;
import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.Map;

@ToString(callSuper = true)
public class MyUserDetails extends User implements UserDetails {

    private static final long serialVersionUID = 1L;

    private List<SimpleGrantedAuthority> authorities;
    private Map<String, Object> attributes;

    public Map<String, Object> getAttributes() {
        return this.attributes;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.authorities;
    }

    @Override
    public String getUsername() {
        return this.getUserId();
    }

    // 만료된 사용자인가?
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    // 락된 사용자인가?
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    // 비밀번호가 유효한가?
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    // 활성화된 사용자인가?
    @Override
    public boolean isEnabled() {
        return true;
    }
}
