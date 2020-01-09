<script>
import EmptyList from './EmptyList.vue'
import TableList from './TableList.vue'
import OrderedList from './OrderedList.vue'
import UnorderedList from './UnorderedList.vue'
export default {
    name: 'smartList',
    functional: true,
    props: {
        items: {
            type: Array,
            required: true
        },
        isOrdered: Boolean
    },
    render: function (createElement, context) {
        function appropriateListComponent () {
            var items = context.props.items
            if (items.length === 0)           return EmptyList
            if (typeof items[0] === 'object') return TableList
            if (context.props.isOrdered)      return OrderedList

            return UnorderedList
        }
        return createElement(
            appropriateListComponent(),
            context.data,
            context.children
        )
    }
}
</script>