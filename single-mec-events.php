<?php

// =============================================================================
// Modern Events Calendar Single, based on (No Container | Header, Footer)
// =============================================================================

get_header();
?>

<div class="x-main full" role="main">
    <?php while (have_posts()) : ?>
    <?
        the_post();
        $single = new MEC_skin_single();
        $single_event_main = $single->get_event_mec(get_the_ID());
        $single_event_obj = $single_event_main[0];
        // $cost = $single_event_main->get_event_cost(get_the_ID());
        ?>
    <aside class="mec-breadcrumbs x-container max width">
        <? $single->display_breadcrumb_widget(get_the_ID()); ?>
    </aside>
    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <div class="the-event">
            <figure class="the-event__image">
                <? the_post_thumbnail('full'); ?>
            </figure>
            <aside class="the-event__meta">
                <? $single->display_date_widget($single_event_obj); ?>
                <? $single->display_time_widget($single_event_obj); ?>
            </aside>
            <h1 class="the-event__title">
                <? the_title(); ?>
            </h1>
            <? $tags = get_the_tags(); ?>
            <? if ($tags) : ?>
            <div class="the-event__tags">
                <h4>Tags: </h4>
                <ul class="the-event__tags-list">
                    <? foreach ($tags as $tag) : ?>
                    <? echo "<li><a href='$tag->slug'>$tag->name</a></li>"; ?>
                    <? endforeach; ?>
                </ul>
            </div>
            <? endif; ?>
            <!-- THE CONTENT -->
            <section class="the-event__content">
                <? the_content(); ?>
            </section>
            <div class="the-event__register">
                <? $single->display_register_button_widget($single_event_obj); ?>
            </div>
            <? $single->display_next_prev_widget($single_event_obj); ?>
            <!-- RELATED EVENTS -->
            <section class="the-event__related-events">
                <? $single->display_related_posts_widget($single_event_obj); ?>
            </section>
            <!-- COMMENTS -->

            <!-- START SIDEBAR -->
            <div class="the-event__sidebar-header">
                <h2>More Info</h2>
            </div>
            <aside class="the-event__sidebar">
                <?
                    // THE SOCIAL SHARE
                    $single->display_social_widget($single_event_obj);
                    // THE SCHEDULE
                    $single->display_hourly_schedules_widget($single_event_obj);
                    // CALENDAR EXPORT
                    $single->display_export_widget($single_event_obj);
                    ?>
            </aside>
            <? $single->display_booking_widget($single_event_obj, $single_event_main); ?>
            <!-- END SIDEBAR -->
        </div>
    </article>
    <?php endwhile; ?>
</div>

<?php get_footer(); ?>